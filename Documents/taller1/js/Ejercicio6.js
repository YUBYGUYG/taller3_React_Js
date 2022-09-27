//Esta es para nombre y apellido ^[a-zA-ZÁ-ÿ\s]{1,40}$
//Regla para numdoc y telefono ^\d{7,10}$
//Regla correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//Regla password ^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$

//Regexr para passwor Google

const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, //Nombre Y Apellido SOLO LETRAS
    numeros:/^[0-9]{7,10}$/, //Numdoc y Teléfono SOLO NÚMEROS
    correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORREOS
    password:/^(?=.+\d)(?=.*[#$%&!*@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
}

const inputs={
    numdoc:false,
    nombre:false,
    apellido:false,
    correo:false,
    telefono:false,
    password:false
}

//Acceder al formulario 
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");
//Agregar Listener de evento submit al formulario que se envía
form.addEventListener('submit',e=>{
    e.preventDefault(); //Evitar que se envie el formulario para realizar las validaciones
})

const validarInput=(regla,input,grupo)=>{
    if(regla.test(input.value)){
            document.getElementById(`g-${grupo}`).classList.remove('error');
            document.getElementById(`g-${grupo}`).classList.add('success');
            document.querySelector(`#g-${grupo} i`).classList.add('bi-check-circle-fill');
            document.querySelector(`#g-${grupo} i`).classList.remove('bi-exclamation-circle-fill'); 
            document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible');
            inputs[grupo]=true;
        }

    else{
            document.getElementById(`g-${grupo}`).classList.add('error');
            document.getElementById(`g-${grupo}`).classList.remove('success');
            document.querySelector(`#g-${grupo} i`).classList.remove('bi-check-circle-fill');
            document.querySelector(`#g-${grupo} i`).classList.add('bi-exclamation-circle-fill');
            document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible'); 
            inputs[grupo]=false;
        }
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`g-password2`).classList.add('error');
		document.getElementById(`g-password2`).classList.remove('success');
		document.querySelector(`#g-password2 i`).classList.add('bi-exclamation-circle-fill');
		document.querySelector(`#g-password2 i`).classList.remove('bi-check-circle-fill');
		document.querySelector(`#g-password2 .msn-error`).classList.add('msn-error-visible'); 
        inputs['password']=false;
	} else {
		document.getElementById(`g-password2`).classList.remove('error');
		document.getElementById(`g-password2`).classList.add('success');
		document.querySelector(`#g-password2 i`).classList.remove('bi-exclamation-circle-fill');
		document.querySelector(`#g-password2 i`).classList.add('bi-check-circle-fill');
		document.querySelector(`#g-password2 .msn-error`).classList.remove('msn-error-visible');
        inputs['password']=true;
	}
}


const validarCampos=(e)=>{
    console.log("Se generó un evento sobre el input"+e.target.name);
    switch(e.target.name){
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "nombre":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "correo":
            validarInput(reglas.correo,e.target,e.target.name);
        break;
        case "password":
            validarInput(reglas.password,e.target,e.target.name);
        break;
        case "password2":
			validarPassword2();
		break;
    }
}

campos.forEach((campo)=>{
    campo.addEventListener("keyup",validarCampos);
    campo.addEventListener("blur",validarCampos);
})

form.addEventListener('submit',e=>{
    e.preventDefault();
    const terminos=document.getElementById("terminos");
    if(inputs.numdoc && inputs.nombre && inputs.apellido && inputs.correo && inputs.telefono && inputs.password && terminos.checked){
        alert("El usuario ha sido registrado");
        form.reset()
        document.querySelectorAll('.success').forEach(icono=>{
            icono.classList.remove('.success')
        })
    }else{
        document.querySelectorAll('.success').forEach(icono=>{
            icono.classList.remove('.error')
        })
    }
})