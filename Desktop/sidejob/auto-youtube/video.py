from moviepy.editor import VideoFileClip, TextClip, CompositeVideoClip, ImageClip, AudioFileClip
import PIL
from moviepy.config import change_settings

change_settings(
    {"IMAGEMAGICK_BINARY": r"C:\\Program Files\\ImageMagick-7.1.1-Q16-HDRI\\magick.exe"})


def CreateVideo(text, order):
    clip = VideoFileClip("background.mp4")

    audio = AudioFileClip('./bgm.mp3')
    video_with_audio = clip.set_audio(audio)

    text = text.encode(
        'utf-8')

    txt_clip = TextClip(
        text, fontsize=50, color='black', font='한컴-말랑말랑-Regular')

    img_clip = ImageClip(f"./images/image_{order}.jpg")
    img_clip = img_clip.resize((1080, 500), PIL.Image.Resampling.LANCZOS)

    txt_clip = txt_clip.set_duration(
        clip.duration).set_position('center').margin(top=700, left=50, right=50, opacity=0)

    img_clip = img_clip.set_duration(
        clip.duration).set_position('center')

    result = CompositeVideoClip([clip, img_clip, txt_clip, video_with_audio])

    result.write_videofile(f"{order}.mp4")
