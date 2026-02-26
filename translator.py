from deep_translator import GoogleTranslator
from langdetect import detect


def translate_text(text, target_lang):
    try:
        translated = GoogleTranslator(source='auto', target=target_lang).translate(text)
        return translated
    except:
        return text


def detect_language(text):
    try:
        return detect(text)
    except:
        return "en"