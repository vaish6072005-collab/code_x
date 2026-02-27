async function sendMessage(){

    let msg = document.getElementById("message").value;
    if(!msg) return;

    const ring = document.getElementById("ring");
    ring.classList.add("spin");

    addMessage("You", msg);

    let response = await fetch("/chat",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({message:msg})
    });

    let data = await response.json();

    ring.classList.remove("spin");

    addMessage("AI", data.response);

    speak(data.response);

    document.getElementById("message").value="";
}

function addMessage(sender,text){
    let box=document.getElementById("chatbox");
    box.innerHTML += `<p><b>${sender}:</b> ${text}</p>`;
    box.scrollTop = box.scrollHeight;
}

function startVoice(){

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang="en-IN";

    recognition.onresult=function(event){
        let voiceText = event.results[0][0].transcript;
        document.getElementById("message").value = voiceText;
        sendMessage();  // Automatically send after speaking
    };

    recognition.start();
}

function run(){
    const ring = document.getElementById("ring");
    ring.classList.toggle("spin");
}

function speak(text){

    function loadAndSpeak(){

        let voices = speechSynthesis.getVoices();
        let speech = new SpeechSynthesisUtterance(text);

        if(/[ऀ-ॿ]/.test(text)){
            speech.lang = "hi-IN";

            for(let i=0; i<voices.length; i++){
                if(voices[i].lang === "hi-IN"){
                    speech.voice = voices[i];
                    break;
                }
            }
        } else {
            speech.lang = "en-IN";

            for(let i=0; i<voices.length; i++){
                if(voices[i].lang === "en-IN"){
                    speech.voice = voices[i];
                    break;
                }
            }
        }

        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;

        speechSynthesis.speak(speech);
    }

    if(speechSynthesis.getVoices().length === 0){
        speechSynthesis.onvoiceschanged = loadAndSpeak;
    } else {
        loadAndSpeak();
    }
}