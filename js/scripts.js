/*var resposta = confirm('Hoho... Mukkate Kuru no Ka?');

const = constante
let = escopo, dentro de bloco
var = padrão

console.log(resposta);
*/

function somar(a, b) {
  return a + b;
}

//eventos
//passa a observar o evento do botão
document.querySelector('#calcular').addEventListener('click', function () {
  let valorA = document.querySelector('#valorA').value;
  let valorB = document.querySelector('#valorB').value;

  if (valorA.length > 0 && valorB.length > 0) {
    alert(parseInt(valorA) + parseInt(valorB));
  } else {
    alert('Informe os dois valores.');
  }
});
