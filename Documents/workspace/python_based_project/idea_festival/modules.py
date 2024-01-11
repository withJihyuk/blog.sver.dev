from gauth_python.requests import user_info
from pymongo import MongoClient
import datetime
import secrets, os
from bson.objectid import ObjectId
import openai

client = MongoClient(os.environ.get('MONGO_URL'))
db = client['event']
nowtime = datetime.datetime.now()

# Account
def get_user_email(user_token):
    user_info_result = user_info(accessToken=user_token)
    return user_info_result.email

def write_user_to_db(user_token):
    user_info_result = user_info(accessToken=user_token)
    doc = {
        'client_id': secrets.token_hex(nbytes=40),
        'email': user_info_result.email,
        'profile_image': user_info_result.profileUrl,
        'liked_posts': [],
        'created_at': datetime.datetime.utcnow()
    }
    db.users.insert_one(doc)
    return doc['client_id']

def get_user_id_from_db(user_email):
    user_info_result = db.users.find_one({'email': f'{user_email}'})
    return user_info_result['client_id'] if user_info_result else None

# Board
def getDiaryDb(clientId):
    board_doc = db.diary.find({'client_id': clientId})
    return board_doc

def check_user_exists(client_id):
    user_info_result = db.users.find_one({'client_id': client_id})
    return True if user_info_result else False

def get_liked_posts_from_db(client_id):
    if not check_user_exists(client_id):
        return False
    user_info_result = db.users.find_one({'client_id': client_id})
    return user_info_result['liked_posts']

def check_own_post(client_id, post_id):
    if not check_user_exists(client_id):
        return False
    doc = db.globalboard.find_one({'_id': ObjectId(f'{post_id}')})
    return True if doc and doc['client_id'] == client_id else False

def get_user_board_from_db(client_id):
    if not check_user_exists(client_id):
        return False
    user_info_result = db.globalboard.find({'client_id': client_id})
    return user_info_result

def delete_post_like_from_db(post_id, client_id):
    if not check_user_exists(client_id) or not check_own_post(client_id, post_id):
        return False
    doc = db.globalboard.find_one_and_update({'post_id': post_id}, {'$inc': {'post_like': -1}})
    client = db.users.update_one({'client_id': client_id}, {'$pull': {'liked_posts': post_id}})
    if not (doc or client):
        return False
    return True

def get_board_from_db():
    board_doc = db.globalboard.find({})
    return board_doc

def get_post_from_db(keyword=None, post_id=None):
    board_doc = db.globalboard.find_one({'_id': ObjectId(f'{post_id}')}) if post_id else db.globalboard.find({'detail': {'$regex': f'{keyword}'}})
    return board_doc

def delete_post_from_db(post_id):
    doc = db.globalboard.find_one_and_delete({'_id': ObjectId(f'{post_id}')})
    return True if doc else False

def writeBoardDb(doc, clientId, board_type, post_id, ref_id):
    # if checkUserExists(client) == False:
    #     return False
    new_doc = {
        'date': nowtime,
        'detail': doc,
        'client_id': clientId,
        'like_count': 0
    }
    
    if board_type == "comment":
        new_doc['post_id'] = post_id
        db.globalboard.insert_one(new_doc)
    elif board_type == "recomment":
        new_doc['post_id'] = post_id
        new_doc['ref_comment_id'] = ref_id
        db.globalboard.insert_one(new_doc)
    elif board_type == "board":
        db.globalboard.insert_one(new_doc)
    elif board_type == "diary":
        db.diary.insert_one(new_doc)
    elif board_type == "emotion":
        db.emotion.insert_one(new_doc)
    elif board_type == "update":
        post_id = ref_id
        db.globalboard.update_one({'_id': ObjectId(f'{post_id}')}, {'$set': {'detail': f'{new_doc}'}})

    return True

#Ai
def requestGPT(user_doc, clientId):
    if check_user_exists(clientId) == False:
        return False
    openai.api_key = os.environ.get('CHATGPT_API_KEY')
    MODEL = "gpt-3.5-turbo"
    USER_INPUT_MSG = f"아래의 내용은 분석해야 할 일기고, 화난게 느껴지는 일기면 1, 기쁨이 느껴지는 일기면 2, 슬픔이 느껴지는 일기면 3 을 반환 해야해. 부가적인 메시지 없이 숫자만을 반환해줘. {user_doc}"
    response = openai.ChatCompletion.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": USER_INPUT_MSG}, 
            {"role": "assistant", "content": "Who's there?"},
        ],
        temperature=0,
    )
    response
    return response['choices'][0]['message']['content']

