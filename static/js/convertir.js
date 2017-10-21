var codigo = null;
var status = null;
var resultado = null;

function convertir(){
  codigo = document.getElementsByName("codigo")[0].value;
  resultado = codigo.replace("\n","");
  document.forms[1].elements[0].value = resultado;			
}

function seleccionar() {
	document.getElementById("resultadoFinal").selectionStart = 0;
	document.getElementById("resultadoFinal").selectionEnd = 500000000000;
}
