const textarea=document.querySelector("textarea");
const button=document.querySelector("button");
let rts=true;
//اگر صحیح باشد یعنی آماده ی  پخش صدا است

// اگر غلط باشد یعنی اماده ی قطع شدن است
const convert=()=>{
   const synth=window.speechSynthesis;
   const text=textarea.value;
   if(!synth.speaking  && text){
   const convert=new SpeechSynthesisUtterance(text);
   synth.speak(convert);
   }
   if(text.length>50){
      if(synth.speaking && rts ){
         button.innerHTML="Pause";
         synth.resume();
         rts=false;
      }else{
         button.innerHTML="Resume";
         synth.pause();
         rts=true;
      }
   }

   else{
      rts=false;
      button.innerHTML="Speaking";
   }
   setInterval(()=>{
      if(!synth.speaking && !rts){
         rts=true;
         button.innerHTML="Convert to Speech";
      }
   })
}



















button.addEventListener("click",convert);