var bt = document.getElementById('bt')
bt.addEventListener('click', carregar)
var data = new Date()
var anoAtual = data.getFullYear();

function carregar(){
  var aniversario = window.document.getElementById("aniver").value
  var img = document.getElementById('img')
  var msg = document.querySelector('p#msg')
  var idade = anoAtual - aniversario
  
  if (aniversario > 1922 && aniversario <= 2023) {
      var gender = sexo()
      function sexo() {
        //gen = um array com os valores das tag com atributo de name 's'
        var gen = document.getElementsByName("s")
        for (let i = 0; i < gen.length; i++) {
          if (gen[i].checked) {
            return gen[i].value
          }
        }
      }

      if (aniversario >= 2005 && gender == "f") {
        msg.innerHTML = `Detectamos <strong>jovem</strong> de ${idade} anos`
        img.src = "criança-f.jpg"
      } else if (aniversario >= 2005 && gender == "m") {
        msg.innerHTML = `Detectamos <strong>jovem</strong> de ${idade} anos`
        img.src = "criança-m.jpg"
      } else if (aniversario > 1973 && gender == "m") {
        msg.innerHTML = `Detectamos <strong>homem</strong> de ${idade} anos`
        img.src = "homem.jpg"
      } else if (aniversario > 1973 && gender == "f") {
        msg.innerHTML = `Detectamos <strong>mulher</strong> de ${idade} anos`
        img.src = "mulher.jpg"
      } else if (gender == "m") {
        msg.innerHTML = `Detectamos <strong>senhor</strong> de ${idade} anos`
        img.src = "senhor.jpg"
      } else {
        msg.innerHTML = `Detectamos <strong>senhora</strong> de ${idade} anos`
        img.src = "senhora.jpg"
      }
    } 
    else{
      window.alert("Idade inválida!")
    }
}