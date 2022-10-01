import './Nav.css';

import imgr from './Hotelia horizontal blanco.svg'

function Registro(){

return(
<><section class="header">

        <div class="heade">
        <img src={imgr}></img>
            <p class="te">Un lugar en tu corazón</p>
            <p class="te1">Eres más que bienvenido</p>
        </div>


    </section>
    <section class="formulario">


        <h2 class="titulo">Regístrate</h2>

        <div class="form">


            <div class="form-group">
                <label for="TipoDoc">Tipo de documento</label>
                <input type="text" class="form-control" placeholder="Escoja una opción"></input>
            </div>

            <div class="form-group">
                <label for="NoDoc">Número de documento</label>
                <input type="text" class="form-control"></input>
            </div>

            <div class="form-group">
                <label for="Nombre">Nombres</label>
                <input type="text" class="form-control"></input>
            </div>

            <div class="form-group">
                <label for="Apellido">Apellidos</label>
                <input type="text" class="form-control"></input>
            </div>

            <div class="form-group">
                <label for="fecha">Fecha nacimiento</label>
                <input type="date" class="form-control"></input>
            </div>

            <div class="form-check">
                <h6>Género</h6>
                <div class="genero">
                    <form class="checks">
                        <label class="radio-inline">
                            <input type="radio" value="" name="genero">Mujer</input>
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
                <input type="email" class="form-control"></input>
            </div>

            <div class="form-group">
                <label for="telefono">Teléfono de contacto</label>
                <input type="text" class="form-control"></input>
            </div>

            <div class="form-group">
                <label for="Pais">País de origen</label>
                <input type="text" class="form-control"></input>
            </div>

            <div class="form-group">
                <label for="foto">Foto</label>
                <input type="file" class="form-control"></input>
            </div>

            <div class="contraseña">
                <label for="">Contraseña</label>
                <input type="password" class="form-control"></input>
            </div>

            <div class="confirmar">
                <label for="">Confirmar contraseña</label>
                <input type="password" class="form-control"></input>
            </div>

        </div>



        <div class="form-1">


            <div class="column-1">
                <div class="form-group">
                    <label for="TipoDoc">Tipo de documento</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="Nombre">Nombres</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="fecha">Fecha nacimiento</label>
                    <input type="date" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="Pais">País de origen</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="">Contraseña</label>
                    <input type="password" class="form-control"></input>
                </div>

            </div>



            <div class="column-2">
                <div class="form-group">
                    <label for="NoDoc">Numero de documento</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="Apellido">Apellidos</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>

                <div class="form-check">
                    <p>Género</p>
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
                    <label for="telefono">Teléfono de contacto</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>

                <div class="form-group">
                    <label for="foto">Foto</label>
                    <input type="file" class="form-control"></input>
                </div>

                <div class="form-group">
                    <label for="">Confirmar contraseña</label>
                    <input type="password" class="form-control"></input>
                </div>
            </div>
        </div>

        <div class="footer">
            <label><input type="checkbox" value="" name="terminos">Acepto términos y condiciones</input></label>
            <button class="button">Ingresar</button>
        </div>

    </section>
    </>
  
    );
}

export default Registro;