var bt = window.document.getElementById('bt')
bt.addEventListener('click', contarPassos)

function contarPassos(){
    var inicio = Number(document.querySelector("#i1").value)
    var fim = Number(document.querySelector("#i2").value)
    var passos = Number(window.document.getElementById("i3").value)
    var contador = document.getElementById('contando')

    if (inicio >= fim) {
        return window.alert("O valor de início tem que ser maior que o de fim!")
    }
    if(passos <= 0){
        return window.alert("Passos precisa ser maior que zero!")
    }
    
    for (var i = inicio; i <= fim; i+=passos){
        contador.innerHTML += `${i}  &#128406 `
    }
    contador.innerHTML += "&#x1F680"
}


