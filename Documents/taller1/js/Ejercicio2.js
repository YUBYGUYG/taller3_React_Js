let boton = document.getElementById("boton")
function ejercicio2(){
    let tempe = parseInt(document.getElementById("temperatura").value)
    let inicio = document.getElementById("inicio").value
    let fin = document.getElementById("fin").value
    if(inicio==1 && fin==1){
        alert(`Ha seleccionado la misma escala de temperatura`)
    }
    else if(inicio==2 && fin==2){
        alert(`Ha seleccionado la misma escala de temperatura`)
    }
    else if(inicio==3 && fin==3){
        alert(`Ha seleccionado la misma escala de temperatura`)
    }
    else if(inicio==1 && fin==2){
        let temp=((tempe-32)/1.8);
        alert(`La conversión de Fahrenheit a Celsius es de ${temp}`)
    }
    else if(inicio==1 && fin==3){
        let temp=((tempe-32)*5/9)+273.15
        alert(`La conversión de Fahrenheit a Kelvin es de ${temp}`)
    }
    else if(inicio==2 && fin==1){
        let temp=(tempe*9/5)+32;
        alert(`La conversión de Celsius a Fahrenheit es de ${temp}`)
    }
    else if(inicio==2 && fin==3){
        let temp=tempe+273.15;
        alert(`la conversión de Celsius a kelvin es de ${temp}`)
    }
    else if(inicio==3 && fin==1){
        let temp=((tempe-273.15)*9/5+32)+32
        alert(`la conversión de kelvin a Fahrenheit es de ${temp}`)
    }
    else if(inicio==3 && fin==2){
        let temp=tempe-273.15
        alert(`la conversión de kelvin a Celsius es de  ${temp}`)
    }
}
boton.addEventListener('click', ejercicio2)