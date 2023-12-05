var d1 = document.getElementById("d1")
var img = document.createElement("img")
img.setAttribute("id", "foto")
img.setAttribute(
  "src",
  "https://i.pinimg.com/564x/c5/e9/22/c5e922d06aa3575b8b79b75df4656164.jpg"
)
d1.appendChild(img)
var textop = document.getElementById('txtp')
var data = new Date()
var dia = data.getDay()

window.addEventListener('load', showData)

function showData(){
    textop.innerHTML = `${data.toLocaleString("pt-BR")}.`
}

var d2 = document.getElementById("d2")
var btAdd = document.createElement("input")
btAdd.setAttribute("class", "bt")
btAdd.setAttribute("type", "button")
btAdd.setAttribute("value", "ADICIONAR")
d2.appendChild(btAdd)

var d3 = document.getElementById('d3')
function addTodo(){
    var valueInput = document.getElementById('txtInput')
    if (valueInput.value) {
      var pTxt = document.createElement('p')
      pTxt.innerHTML = valueInput.value
      d3.appendChild(pTxt) 
    }
    
}
btAdd.addEventListener('click', addTodo)


