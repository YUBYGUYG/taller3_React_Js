import './Nav.css';

import slide1 from './slide1.jpg'
import slide2 from './slide2.png'
import imgn from './Hotelia negro vertical.svg'
import logo from './Hotelia horizontal blanco.svg'
import user1 from './user1.png'
import user2 from './user2.png'
import user3 from './user3.png'
import vector from './Vector-opinion.png'


function Nav(){
    return(
    <><nav>
        <img src={logo}></img>
        <div>
        <a href="#" class="item">Inicio </a>
        <a href="#" class="item">Ubicanos </a>
        <a href="#" class="item">Opiniciones </a>
        <a href="../login/Login.jsx" class="botonsesion"><i class="fa-solid fa-user"></i>Iniciar sesion</a>
        </div>  
    </nav>
    <div class="primerimg">
    <div class="text-slider">
            <p>Lorem ipsum dolor sit ameteliter
                consectetur adipiscing elit.
            </p>
        </div>
<div id="carouselExampleIndicators" class="carousel slide" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={slide1} alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slide2} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slide1} alt="Third slide"></img>
    </div>
  </div>
</div>
    </div>
    <section class="container2">
    <p class="contai">
        Estamos ubicados en el barrio La Cabrera al norte de Bogotá , 
        en un contexto de lujo donde interactúan los negocios , el ocio y el descanso , 
        gracias a su estratégica ubicación rodeada de bancos , restaurantes de alta cocina , 
        centros comerciales , almacenes de lujo y emblemáticos parques para aprovechar la
        naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están 
        el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño ,
        ponemos a tu disposición una oferta gastronómica tan sofisticada como saludable 
        a base de productos locales, cargados de lo mejor de la tradición colombiana . 
        </p>
    <img src={imgn}></img>

    </section>
    
    
    <section id="features">
        <h2 class="feature-title">Razones por las que disfrutarás quedarte con nosotros</h2>
        <div class="feature-description">
            <div class="feature feature-blue">
                <i class="fa-solid fa-bell-concierge"></i>
                <p>Lorem ipsum dolor</p>
            </div>
            <div class="feature feature-black">
                <i class="fa-solid fa-bed"></i>
                <p>Lorem ipsum dolor</p>
            </div>
            <div class="feature feature-blue">
                <i class="fa-solid fa-wifi"></i>
                <p>Lorem ipsum dolor</p>
            </div>
            <div class=" feature feature-black">
                <i class="fa-solid fa-dumbbell"></i>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    </section>

    
    <div class="maps">
        <h1>Ubícanos</h1>
    </div>
    <section class="maps1">
        
    </section>

    <footer>
        <h2>
            AVENIDA CARRERA 8 #12A - 42, BOGOTA D.C COLOMBIA
        </h2>
        <hr />
        <h2>
            +57 601 4567899
        </h2>
    </footer>

    <div class="nosotros" id="nosotros">
            Nuestro usuarios dicen...
        </div>
        <section id="opinion">
            <div class="cards carta1">
                <div class="card-content">
                <img src={vector} class="deg"></img>
                    <div class="image">
                    <img src={user1} class="fotop"></img>
                    </div>
                    <div class="name-profession">
                        <span class="name">Diego Rodríguez</span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star star5"></i>
                        <i class="fas fa-star star4"></i>
                        <i class="fas fa-star star3"></i>
                        <i class="fas fa-star star2"></i>
                        <i class="fas fa-star star1"></i>
                    </div>
                    <div class="bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
                        doloribus totam quo quibusdam saepe assumenda ad voluptates dolor aliquam.
                    </div>
                </div>
            </div>

            <div class="cards carta2">
                <div class="card-content">
                <img src={vector} class="deg"></img>
                    <div class="image">
                    <img src={user2} class="fotop"></img>
                    </div>
                    <div class="name-profession">
                        <span class="name">Diana García</span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star star5"></i>
                        <i class="fas fa-star star4"></i>
                        <i class="fas fa-star star3"></i>
                        <i class="fas fa-star star2"></i>
                        <i class="fas fa-star star1"></i>
                    </div>
                    <div class="bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
                        doloribus totam quo quibusdam saepe assumenda ad voluptates dolor aliquam.
                    </div>
                </div>
            </div>

            <div class="cards carta3">
                <div class="card-content">
                <img src={vector} class="deg"></img>
                    <div class="image">
                    <img src={user3} class="fotop"></img>
                    </div>
                    <div class="name-profession">
                        <span class="name">Andrés Hernández</span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star star5"></i>
                        <i class="fas fa-star star4"></i>
                        <i class="fas fa-star star3"></i>
                        <i class="fas fa-star star2"></i>
                        <i class="fas fa-star star1"></i>
                    </div>
                    <div class="bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
                        doloribus totam quo quibusdam saepe assumenda ad voluptates dolor aliquam.
                    </div>
                </div>
            </div>
        </section>

        <footer class="piepag">
        <div class="grup1">
        <div class="box">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                   Atque recusandae blanditiis delectus sunt molestiae temporibus!</p>
                   <div class="red-social">
                    <a href="https://www.instagram.com/" class="fa fa-instagram">
                    </a>
                    <a href="https://es-la.facebook.com/" class="fa fa-facebook">
                    </a>
                    <a href="https://twitter.com/?lang=es" class="fa fa-twitter">
                    </a>
                </div>
            </div>
        <div class="box">        
                 <p><i class="fa-solid fa-location-dot"></i>
                Avenida carrera 8 #12A - 42, Bogota D.C Colombia</p>
           
                <p><i class="fa-solid fa-phone"></i>
                +57 601 4567899</p>     
        </div>
        <div class="box">
            <p>Politicas de privacidad</p>
            <p>Politicas de privacidad</p>
        </div>
        </div>
    </footer>

    </>
  
    );
}

export default Nav;