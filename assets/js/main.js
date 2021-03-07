var nome = document.getElementById('inputNome');
var nascimento = document.getElementById('inputNasc');
var idade = document.getElementById('inputAnos');

function enviar(){
 if(nome.value == '') {
   alert('o campo nome deve ser preenchido');
   nome.focus()
 } else if(nascimento.value == '') {
   alert('o campo data de nascimento deve ser preenchido');
   nascimento.focus()
 } else  if(idade.value == '') {
   alert('o campo idade deve ser preenchido');
   idade.focus()
 }
    nome.value = '';
    nascimento.value = '';
    idade.value = '';
}