# code_x   (AI VOICE CHATBOT)
AI Voice Chatbot for Real-Time Human-Like Assistance: An intelligent multilingual voice assistant that understands natural speech, responds contextually, detects sentiment and urgency, and works 24/7. Designed to replace traditional IVR systems, it improves customer experience, reduces costs, and integrates with CRM, WhatsApp, ERP, and websites.
This is our project structure
AI_Voice_Chatbot/
│
├── app.py
├── config.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── backend/
│   ├── ai/
│   │     └── ai_brain.py
│   ├── commands/
│   │     └── weather.py
│   └── utils/
│
├── static/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
│
└── templates/
      └── index.html

An industry-style AI Voice Assistant web application built using HTML, CSS, and JavaScript, featuring a futuristic neon-glow UI, smooth animations, and real-time voice interaction using the Web Speech API.
This project focuses on delivering a modern, professional, and highly interactive user experience suitable for real-world applications and hackathon projects.

An intelligent, real-time AI Voice Assistant that understands human speech, processes user queries using AI, and responds with natural-sounding voice. It provides an interactive, responsive, and user-friendly experience using modern web technologies and AI integration. Designed for professional and industry-level applications such as virtual assistants, customer support bots, and smart automation systems

command_handler - Copy.py
Purpose: Acts as the primary logic hub for processing user input.
Functionality: It parses incoming text strings to identify specific keywords or triggers.
Current State: Includes a hardcoded check for opening YouTube and provides a generic fallback for other commands.
weather (1).py
Purpose: A specialized command module for retrieving real-time weather data.
Integration: Connects to the OpenWeatherMap API using a secure API key from a configuration file.
Functionality: * Fetches temperature, weather descriptions, and humidity levels.
Defaults to Mumbai if no city is specified.
Includes robust error handling for API connection issues or invalid city names.


This style is best for a quick overview of what each file does.

helper.py: Contains reusable utility functions and helper methods to support core application logic and reduce code duplication.

translater.py: Manages text translation and localization logic, handling language processing and API integrations.
