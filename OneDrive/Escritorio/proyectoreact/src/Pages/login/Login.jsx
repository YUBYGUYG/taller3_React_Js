import './Login.css';

import logol from './Hotelia horizontal negro.svg'

function Login(){
    return(
     
    <div class="form">
    <div class="svg"><svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-1.69,113.00 C203.72,229.45 235.32,-11.33 503.94,57.73 L506.20,-9.36 L0.00,0.00 Z"
                style="stroke: none; fill: #fff;"></path>
        </svg></div>

        <img src={logol}></img>
    <div class="icon"><i class="fa fa-user"></i></div>

    <label for="email">Usuario</label>
    <input type="email" name="email" class="box"></input>

    <label for="password">Contraseña</label>
    <input type="password" name="password" class="box"></input>
    <input type="submit" value="Ingresar" id="submit"></input>
    <p>¿No tienes una cuenta? <a id="register" href="registro.html">Regístrate aquí</a></p>
</div>
  
  
  );
}

export default Login;