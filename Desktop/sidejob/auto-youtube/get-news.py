from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pyautogui
import pyperclip
import time
import os
import requests
import video
from datetime import datetime
from selenium.webdriver.common.action_chains import ActionChains

image_folder = './images'


def chromeWebdriver():
    chrome_service = ChromeService(
        executable_path=ChromeDriverManager().install())
    options = Options()
    options.add_experimental_option('detach', True)
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'
    options.add_argument(f'user-agent={user_agent}')

    driver = webdriver.Chrome(service=chrome_service, options=options)

    return driver


driver = chromeWebdriver()
driver.get('https://partners.newspic.kr/login')
driver.implicitly_wait(2)
time.sleep(2)

id = driver.find_element(By.NAME, 'id')
id.click()
pyperclip.copy('jihyuk0252@daum.net')
pyautogui.hotkey('ctrl', 'v')
time.sleep(1)

pw = driver.find_element(By.NAME, 'password')
pw.click()
pyperclip.copy('X98gK*V2FcrqU8')
pyautogui.hotkey('ctrl', 'v')
time.sleep(1)

login_btn = driver.find_element(
    By.XPATH, '/html/body/div[1]/section/div[2]/div/div[1]/form/button')
login_btn.click()
time.sleep(2)

driver.get(
    'https://partners.newspic.kr/category/categoryDetail?channelNo=32&recent=true')

images = []
titles = []

news_elements = driver.find_elements(By.CSS_SELECTOR, '.list-gridA li.row')[:8]
for i, news_element in enumerate(news_elements):
    image_element = news_element.find_element(By.TAG_NAME, 'img')
    title_element = news_element.find_element(By.CLASS_NAME, 'article-tlt')
    copy_button = news_element.find_element(
        By.CSS_SELECTOR, 'button[data-type="copyurl"]')

    images.append(image_element.get_attribute('src'))

    image_name = f"image_{i + 1}.jpg"
    image_path = os.path.join(image_folder, image_name)
    with open(image_path, 'wb') as f:
        f.write(requests.get(image_element.get_attribute('src')).content)

    titles.append(title_element.text)

    ActionChains(driver).move_to_element(
        copy_button).click(copy_button).perform()
    time.sleep(1)

    copied_url = pyperclip.paste()

    WebDriverWait(driver, 5).until(EC.alert_is_present())
    driver.switch_to.alert.accept()

    print("Title:", titles[-1])
    print("Image URL:", images[-1])
    print("Copied URL:", copied_url)
    print()

    video.CreateVideo(titles[-1], images[-1], i + 1)
