window.addEventListener('load', carregar)

function carregar(){
   var msg = document.querySelector('div#msg') 
   var date = new Date()
   var hour = date.getHours()
   var minutes = date.getMinutes()
   var seconds = date.getSeconds()
   var img = document.querySelector('img#img') 

   if (hour >= 0 && hour < 5) {
    msg.innerHTML = `Boa madrugada! São ${hour}H${minutes}M${seconds}S...`
    document.body.style.background = "#03045e"
    img.src = "night2.jpg"
   }
   else if(hour <= 12){
    msg.innerHTML = `Bom dia! São ${hour}H${minutes}M${seconds}S...`
    document.body.style.background = "#e9c46a"
    img.src = "morning.jpg"
   }
   else if(hour <= 18) {
    msg.innerHTML = `Boa tarde! São ${hour}H${minutes}M${seconds}S...`
    document.body.style.background = "#264653" 
    img.src = "afternoon.jpg"
   }
   else if(hour <= 23){
    msg.innerHTML = `Boa noite! São ${hour}:${minutes}M${seconds}S...`
    document.body.style.background = "#003049"
    img.src = "night.jpg"
   }
   
}

