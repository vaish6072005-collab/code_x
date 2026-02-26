# backend/commands/weather.py
import requests
from config import OPENWEATHER_API_KEY

def get_weather(city="Mumbai"):
    """Fetch weather info from OpenWeatherMap API"""
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={OPENWEATHER_API_KEY}&units=metric"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if data.get("main"):
            temp = data["main"]["temp"]
            desc = data["weather"][0]["description"]
            humidity = data["main"]["humidity"]
            return f"Weather in {city}: {temp}°C, {desc}, Humidity: {humidity}%"
        else:
            return "City not found. Please check the name."
    
    except Exception as e:
        return f"Error fetching weather: {e}"