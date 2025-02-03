const textarea=document.querySelector("textarea");
const button=document.querySelector("button");
let isnotSpeaking=true;

const textToSpeech=()=>{
    const synth=window.speechSynthesis;
    const text=textarea.value;

 if(!synth.speaking && text){
    const utternace=new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
 }
 if(text.length>50){
    if(synth.speaking && isnotSpeaking){
        button.innerHTML="Pause";
        synth.resume();
        isnotSpeaking=false;
    }else{
        button.innerHTML="Resume";
        synth.pause();
        isnotSpeaking=true;
    }
    
 }else{
   isnotSpeaking=false;
    button.innerHTML="Speaking";
 }

 setInterval(()=>{
    if(!synth.speaking && !isnotSpeaking){
      isnotSpeaking=true;
        button.innerHTML="Convert to Speech";
    }
 })
}
button.addEventListener("click",textToSpeech);