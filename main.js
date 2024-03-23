function adivinador(){
    var verdad = document.getElementById("adivina").value;
    alert("Penso en el numero: "+verdad);
}
 function spinner(){
    var spiner = document.getElementById("spin");
    spiner.style.display="flex";
    var carga = document.getElementById("cargando");
    carga.style.display="flex";
    setTimeout(adivinador, 3000);
 }