let boton = document.getElementById("boton")
function ejercicio3(){
    let lado1=parseInt(document.getElementById("lado1").value);
    let lado2=parseInt(document.getElementById("lado2").value);
    let lado3=parseInt(document.getElementById("lado3").value);
    if(lado1==lado2 && lado1==lado3 ){
        alert(`El triángulo es equilatero`)
    }
    else if(lado1<lado2 && lado1==lado3 || lado1<lado3 && lado1==lado2 || lado1>lado2 && lado1==lado3 || lado1>lado3 && lado1==lado2){
        alert(`El triángulo es isósceles`)
    }
    else if(lado1!=lado2 && lado1!=lado3 ){
        alert(`El triángulo es escaleno`)
    }
}
boton.addEventListener('click', ejercicio3)