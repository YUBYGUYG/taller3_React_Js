let boton=document.getElementById("boton");
function ejercicio4(){
    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let materia=document.getElementById("materia").value
    if  (nombre == 1 && apellido== 1 && materia==1){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 1 && apellido== 1 && materia==8){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 2 && apellido== 2 && materia==2){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 3 && apellido== 3 && materia==3){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 4 && apellido== 4 && materia==4){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 5 && apellido== 5 && materia==5){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 5 && apellido== 5 && materia==5){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 6 && apellido== 6 && materia==6){
        alert(`El dato es correcto`)
    }
    else if  (nombre == 7 && apellido== 7 && materia==7){
        alert(`El dato es correcto`)
    }
    else{
        alert(`El dato es incorrecto`)
    }
}
boton.addEventListener('click', ejercicio4)