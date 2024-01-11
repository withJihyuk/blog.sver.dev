from flask import Flask, make_response, request
from gauth_python.requests import token_issuance, token_reissuance
import modules, json, os
from bson import json_util

app = Flask(__name__)

# Account
# 정상작동
@app.route('/api/users/login', methods=['POST'])
def get_code_and_generate_token():
    params = request.get_json()
    user_token = token_issuance(
        code=params['client_code'],
        clientId=os.environ.get('gauth_clientId'),
        clientSecret=os.environ.get('gauth_clientSecret'),
        redirectUri=os.environ.get('gauth_redirectUri')
    )
    response_dict = json.loads(user_token)
    if(response_dict.get("code") == "200"):
        user_email = modules.get_user_email(user_token)
        user_id = modules.get_user_id_from_db(user_email)

        if user_id is None:
            client_id = modules.write_user_to_db(user_token)
            return json_util.dumps((client_id, user_token, False), default=json_util.default)

        return json_util.dumps((user_id, user_token, True), default=json_util.default)
    
    return make_response("status 401", 401)

#정상작동
@app.route('/api/users/token', methods=['POST'])
def get_user_token():
    params = request.get_json()
    return_token = token_reissuance(refreshToken=params['client_refresh_token'])
    return json_util.dumps(return_token, default=json_util.default)

# Board
# 정상작동/권한설정필요
@app.route('/api/diary/gpt', methods=['POST'])
def getDiaryGpt():
    params = request.get_json()
    return json_util.dumps(modules.getDiaryGpt(params['text']), default=json_util.default)

@app.route('/api/diary', methods=['POST'])
def getBoardPins():
    params = request.get_json()
    result = list(modules.getDiaryDb(params['clientId']))
    return json_util.dumps(result, default=json_util.default)

@app.route('/api/pins', methods=['POST'])
def write_user_pins():
    params = request.get_json()
    if params['clientId'] is None:
        return make_response("status 401", 401)
    return json_util.dumps(modules.writeBoardDb(params['doc'], params['clientId'], params['type'], params['ref_id'], params['post_id']) == True)

#정상작동
@app.route('/api/pins', methods=['GET'])
def get_board_pins():
    result = list(modules.get_board_from_db())
    return json_util.dumps(result, default=json_util.default)

#정상작동
@app.route('/api/pins/<pin_id>', methods=['GET'])
def get_user_pins(pin_id):
    result = modules.get_post_from_db(post_id=pin_id)
    return json_util.dumps(result, default=json_util.default)

#정상작동/권한설정필요
@app.route('/api/pins/<pin_id>', methods=['DELETE'])
def delete_post_likes(pin_id):
    modules.delete_post_from_db(pin_id)
    return make_response("status 200", 200)

@app.route('/api/pins/<pin_id>/likes', methods=['POST'])
def post_post_likes(pin_id):
    client_id = request.args.get('client_id')
    if not modules.put_post_like_to_db(pin_id, client_id):
        return make_response("status 400", 400)
    return make_response("status 200", 200)

@app.route('/api/pins/<pin_id>/dislikes', methods=['POST'])
def post_post_dislikes(pin_id):
    client_id = request.args.get('client_id')
    if not modules.delete_post_like_from_db(pin_id, client_id):
        return make_response("status 400", 400)
    return make_response("status 200", 200)



if __name__ == '__main__':
    app.run(debug=True)
