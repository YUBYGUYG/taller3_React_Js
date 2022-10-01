import './Dashboard.css';

import campana from './hotelia campana.svg'
import angie from './Angie.jpg'

function Dashboard(){

return(
<><section class="dashboard">


<div class="menu_side" id="menu_side">

    <div class="logos">
        <div class="logo">
            <img src={campana} class="logo-1"></img>
            <img src={angie} class="logo-2"></img>
        </div>
    </div>

    <div class="options_menu">
        <a href="#" class="seleccion">
            <div class="opcion">
                <i class="fas fa-bed" title="Habitaciones"></i>
                <h6>Habitaciones</h6>
            </div>
        </a>
        <a href="#">
            <div class="opcion">
                <i class="fas fa-bell-concierge" title="Reservas"></i>
                <h6>Reservas</h6>
            </div>
        </a>
        <a href="#">
            <div class="opcion">
                <i class="fas fa-bed" title="Habitaciones"></i>
                <h6>Habitaciones</h6>
            </div>
        </a>
        <a href="#">
            <div class="opcion">
                <i class="fas fa-bell-concierge" title="Reservas"></i>
                <h6>Reservas</h6>
            </div>
        </a>
        <a href="index.html">
            <div class="opcion" id="exit">
                <i class="fas fa-arrow-right-from-bracket"></i>
                <h6>Cerrar sesión</h6>
            </div>
        </a>
    </div>
</div>

</section>

<section class="formulario">

<div class="form">


    <h2 class="titulo">Bienvenido, Angie Vargas</h2>


    <div class="column-1">
        <div class="profile">
        <img src={angie}></img>
        </div>
    </div>

    <div class="column-2">
        <div class="form-group">
            <label for="TipoDoc">Tipo de documento</label>
            <input type="text" class="form-control" placeholder="Cedula de Ciudadania"></input>
        </div>

        <div class="form-group">
            <label for="Nombre">Nombres</label>
            <input type="text" class="form-control" placeholder="Angie Camila"></input>
        </div>

        <div class="form-group">
            <label for="fecha">Fecha nacimiento</label>
            <input type="date" class="form-control" placeholder="10/08/1976"></input>
        </div>

        <div class="form-check">
            <h6>Género</h6>
            <div class="genero">
                <form class="checks">
                    <label class="radio-inline">
                        <input type="radio" value="" name="genero" checked>Mujer</input>
                    </label>
                    <label class="radio-inline">
                        <input type="radio" value="" name="genero">Hombre</input>
                    </label>
                    <label class="radio-inline">
                        <input type="radio" value="" name="genero">Otro</input>
                    </label>
                </form>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="angievargas2@gmail.com"></input>
        </div>

    </div>

    <div class="column-3">
        <div class="form-group">
            <label for="NoDoc">Numero de documento</label>
            <input type="text" class="form-control" placeholder="1025417456"></input>
        </div>

        <div class="form-group">
            <label for="Apellido">Apellidos</label>
            <input type="text" class="form-control" placeholder="Vargas Pinzón"></input>
        </div>

        <div class="form-group">
            <label for="Pais">País de origen</label>
            <input type="text" class="form-control" placeholder="Colombia"></input>
        </div>

        <div class="form-group">
            <label for="telefono">Teléfono de contacto</label>
            <input type="text" class="form-control" placeholder="3135207460"></input>
        </div>
    </div>

    <div class="footer">
        <button class="button">Actualizar</button>

        <div class="contraseñas">
            <div class="contraseña">
                <label for="">Contraseña</label>
                <input type="password" class="form-control"></input>
            </div>

            <div class="confirmar">
                <label for="">Confirmar contraseña</label>
                <input type="password" class="form-control"></input>
            </div>
        </div>
        <button class="button">Cambiar</button>

    </div>
  </div>
</section></>

    );
}

export default Dashboard;