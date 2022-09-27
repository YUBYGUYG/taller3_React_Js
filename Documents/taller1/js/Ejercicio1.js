let boton = document.getElementById("boton")
function ejercicio1(){
    let palabra = document.getElementById("palabra").value
    let opcioncion = document.getElementById("opcion").value
if(opcioncion==1){
    let long = palabra.length
    alert(`La longitud de la palabra es ${long}`)
}
else if(opcioncion==2){
    let may = palabra.toUpperCase()
    alert(`La palabra en mayusculas es ${may}`)
}
else if(opcioncion==3){
    let min = palabra.toLowerCase()
    alert(`La palabra en mayusculas es ${min}`)
}
else if(opcioncion==4){
    let caracter = palabra.charAt(0)
    alert(`La primera letra es ${caracter}`)
}
}
boton.addEventListener('click', ejercicio1)