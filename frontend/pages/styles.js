const styles = `

  
  /* Estilos globales */
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  /* Estilos para pantallas grandes */
  @media (min-width: 1024px) {
    .title-container {
      top: 20px;
      left: 150px;
    }


    .logoinit {
      width: 100px;
      height: 100px;
      margin-left: 30px;
      position: absolute;
      left: 0;
      top: 25px;
    }

    .logo {
      width: 550px;
      height: 150px;
      margin-left: 950px;
    }

    .rectangle1 {
      width: 482px;
      height: 237px;
      left: 1000px;
      top: 150px;
    }

    /* Resto de estilos... */
  }

  /* Estilos para pantallas medianas */
  @media (max-width: 1023px) {
    .title-container {
      top: 10px;
      left: 50px;
    }

    .logo {
      width: 300px;
      height: 100px;
      margin-left: 30px;
    }

    .rectangle1 {
      width: 382px;
      height: 187px;
      left: 600px;
      top: 100px;
    }

    /* Resto de estilos... */
  }

  /* Estilos para pantallas pequeñas */
  @media (max-width: 768px) {
    .title-container {
      top: 10px;
      left: 20px;
    }
   

    .logo {
      width: 200px;
      height: 70px;
      margin-left: 20px;
    }



    .rectangle1 {
      width: 282px;
      height: 137px;
      left: 300px;
      top: 50px;
    }

    /* Resto de estilos... */
  }

  /* Resto de estilos... */
  .image-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .textHead1{
    position: absolute;
    left: 30px;
    top: 140px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 31px;
    color: #ffffff;
    text-align: left;
    z-index: 1;
  }

 
    .textHead2 a {
      position: absolute;
    left: 980px;
    top: 140px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 31px;
    color: #ffffff;
    text-align: left;
    z-index: 1;
      
    }

    .textHead3 a {
      position: absolute;
    left: 1300px;
    top: 140px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 31px;
    color: #ffffff;
    text-align: left;
    z-index: 1;  
    }
    
  


  .image {
    position: absolute;
    width: 100%;
    height: auto;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cambiar el nivel de opacidad si es necesario */
  }

  .title-container {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    height: 100px; /* Ajusta la altura según tus necesidades */ 
    top: 25px;
    z-index: 1;
  }
  
  .title {
    font-family: "IBM Plex Mono", monospace;
    font-size: 130px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.08em;
    text-align: center;
    color: white;
    margin: 0;
    padding-left: 180px;
  }

  .logo {
    position: relative;
  }

  .navbar {
    background-color: #f0f0f0; /* Cambiar el color de fondo según tus necesidades */
    padding: 10px 20px; /* Ajustar el espacio interno según tus necesidades */
  }

  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .navbar ul li {
    display: inline-block;
    margin-right: 10px; /* Ajustar el espacio entre los elementos según tus necesidades */
  }

  .navbar ul li a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 14px;
  }

  .navbar ul li a:hover {
    color: #ff0000;
  }


  .new-black-div {
    position: absolute;
    top: 580px;
    left: 0;
    background-color: black;
    height: 150px; /* Ajusta la altura según tus necesidades */
    width: 100%; /* Ajusta el ancho según tus necesidades */
    z-index: 1; /* Ajusta el valor del z-index según tus necesidades */
    border-radius: 30px 30px 0 0; /* Agrega las esquinas redondeadas solo en la parte superior */
    /* Agrega aquí otras propiedades de estilo según tus necesidades */
  }

  .logo-insta {
    position: absolute;
    left: 70px; /* Ajusta la posición izquierda según tus necesidades */
    top: 10px; /* Ajusta la posición superior según tus necesidades */
    /* Agrega aquí otras propiedades de estilo según tus necesidades */
  }

  .logo-tiktok {
    position: absolute;
    left: 130px; /* Ajusta la posición izquierda según tus necesidades */
    top: 10px; /* Ajusta la posición superior según tus necesidades */
    /* Agrega aquí otras propiedades de estilo según tus necesidades */
  }

  .textmachine {
    position: absolute; /* Ajusta la posición según tus necesidades */
    left: 200px; /* Ajusta la posición a la izquierda según tus necesidades */
    top: 30px; /* Ajusta la posición vertical según tus necesidades */
    transform: translateY(-50%); /* Centra verticalmente el elemento */
    color: #FFF;
    font-size: 36px;
    font-family: IBM Plex Sans;
    font-weight: 300;
    line-height: 95.5%;
  
  }
  
  

  .purple-container {
    background-color: #711ED9; /* Cambiar el color de fondo según tus necesidades */
    width: 100%;
    height: 3200px; /* Ajustar la altura según tus necesidades */
    border-top-left-radius: 67px;
    border-top-right-radius: 67px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .image2 {
    width: 100%;
    height: 420px;
    border-top: 500px;
  }

  .image3 {
    width: 100%;
    height: 320px;
  }

  .image4 {
    position: absolute;
    width: 446px;
    height: 325px;
    top: -50px; /* Ajusta la posición hacia arriba */
    z-index: 1; /* Asegura que la imagen esté por encima del rectángulo */
  }

  .about-us {
    position: absolute;
    width: 342px;
    height: 34px;
    left: 110px;
    top: 150px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 95.5%;
    color: #ffffff;
  }

  .tech-center {
    position: absolute;
    width: 847px;
    height: 53px;
    left: 110px;
    top: 250px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 47px;
    color: #ffffff;
  }

  .rectangle1 {
    position: absolute;
    width: 482px;
    height: 237px;
    left: 1000px;
    top: 150px;
    background: #671bc8;
    border-radius: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .textrectangle1 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    color: #ffffff;
    
  }

  .rectangle2 {
    position: absolute;
    width: 532px;
    height: 317px;
    background: #671bc8;
    border-radius: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 143px;
    top: 1265px;
  }

  .rectangle3 {
    position: absolute;
    width: 532px;
    height: 317px;
    background: #671bc8;
    border-radius: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 143px;
    top: 1712px;
  }

  .purple-title1 {
    position: absolute;
    width: 700px;
    height: 38px;
    left: 798px;
    top: 1344px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 47px;
    color: #ffffff;
  }

  .purple-text1 {
    position: absolute;
    width: 737px;
    height: 62px;
    left: 798px;
    top: 1402px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 31px;
    color: #ffffff;
    text-align: left;
  }

  .purple-title2 {
    position: absolute;
    width: 700px;
    height: 38px;
    left: 798px;
    top: 1794px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 47px;
    color: #ffffff;
  }

  .purple-text2 {
    position: absolute;
    width: 737px;
    height: 62px;
    left: 798px;
    top: 1852px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 31px;
    color: #ffffff;
    text-align: left;
  }

  .image5 {
    position: absolute;
    width: 100vw; /* Ajusta el ancho para ocupar toda la pantalla */
    height: 491px;
    left: 0;
    top: 2150px; /* Ajusta la posición hacia arriba */
    z-index: 1; /* Asegura que la imagen esté por encima del rectángulo */
  }

  .overlay {
    background-color: #000; /* Cambiar el color de fondo según tus necesidades */
    width: 100%;
    background-color: #000; /* Cambiar el color de fondo según tus necesidades */
    border-top-left-radius: 67px;
    border-top-right-radius: 67px;
    transform: translateY(2200px);
    z-index: 2;
    width: 100%;
    height: 3000px;
    
  }

  #textOverlay {
    position: absolute;
    left: 90px;
    top: 60px;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 31px;
    color: #ffffff;
    text-align: left;
  }
  

  .black-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    top: 650px;
    background-color: #000;
    z-index: 2;
  }

  .video-container {
    position: absolute;
    top: 200px;
    left: 500px;
    z-index: 2;
  }


  .container {
    position: absolute;
    top: 3250px; /* Ajusta el valor según tu necesidad */
    left: 50%; /* Ajusta el valor según tu necesidad */
    transform: translateX(-50%);
    /* Otros estilos para el contenedor */
  }
  

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .square {
    /* Estilos para la tarjeta */
    width: 380px;
    height: 450px;
    background-color: #333333;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center; /* Alinea el contenido verticalmente */
    padding: 16px;
    margin: 30px;
 
  }

  .image-card {
    width: 100%; /* Ocupa todo el ancho disponible */
    height: 300px; /* Ajusta automáticamente la altura */
    object-fit: cover;
    border-radius: 30px;
    
    
    
  }
  
  .titlecard {
    /* Estilos para el título */
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px; /* margen imagen y texto */
    color: white !important;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    text-align: left;
  }
  
  .textcard {
    /* Estilos para el texto */
    margin-top: 5px;
    text-align: center;
    color:white;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    text-align: left;
  }
  
  .image6 {
    position: absolute;
    height: 90px;
    left: 50%;
    transform: translateX(-50%);
    top: 2700px; /* Ajusta la posición hacia arriba */
    z-index: 1; /* Asegura que la imagen esté por encima del rectángulo */
  }


  
    .text-center {
      position: absolute;
     text-align: center;
     top: 2900px; /* Ajusta la posición vertical del texto */
      left: 0;
     right: 0;
     color: white;
     font-size:24px;
     font-family: "IBM Plex Sans", sans-serif;
     font-style: normal;
     z-index: 1;
    }

    .button {
      position: absolute;
      top: 4380px; /* Ajusta la posición vertical del botón */
      left: 50%; /* Centra el botón horizontalmente */
      transform: translateX(-50%); /* Ajusta el centrado horizontal */
      display: inline-block;
      padding: 10px 20px;
      background-color: #711ED9;
      color: white;
      border-radius: 30px;
      text-decoration: none;
      font-family: "IBM Plex Sans", sans-serif;
      font-style: normal;
      z-index: 2;
    }
    
    .button:hover {
      background-color: #8A2EE1; /* Cambiar el color de fondo al pasar el cursor sobre el botón */
    }

    .purple-overlay {
      position: absolute;
      top: 1800px;
      left: 0;
      width: 100%;
      height: 400px;
      background-color: #711ED9;
      z-index: 2;
    }

    /* Estilos para el formulario cuadrado */
    
.form-container {
  position: absolute;
  top: 4950px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600x;
  height: 500px;
  background-color: black;
  border: 3px solid #711ED9;
  padding: 20px;
  box-sizing: border-box;
  z-index: 3;
  text-align: center;
}

.form-container {
  border-radius: 20px;
  background-color: #000000;
  padding: 20px;
  color: #ffffff;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.form-container h2 {
  text-align: center;
  font-size: 20px;
}

.form-container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container input[type="email"],
.form-container textarea {
  border-radius: 20px;
  border: 1px solid #cccccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f2f2f2;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
}

.form-container input[type="email"] {
  width: 200px; /* Ancho personalizado para el input de correo electrónico */
  margin-left: -100px; 
}

.form-container textarea {
  width: 300px; /* Ancho personalizado para el textarea */
  height: 150px;
}

.form-container button[type="submit"] {
  background-color: #711ED9;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
}

.form-container p {
  text-align: center;
}

.text-footer{
  position: absolute;
     text-align: center;
     top: 5500px; /* Ajusta la posición vertical del texto */
      left: 0;
     right: 0;
     color: white;
     font-size:44px;
     font-family: "IBM Plex Sans", sans-serif;
     font-style: normal;
     z-index: 1;
}


.logo-footer1 {
  position: relative;
  top: 2500px; /* Ajusta el valor según sea necesario */
  left: 250px; /* Ajusta el valor según sea necesario */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Puedes ajustar la alineación según sea necesario */
  color: white;
  font-size: 34px;
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  z-index: 2;
  opacity: 0.550000011920929;
}

.logo-footer2 {
  position: relative;
  top: 2320px; /* Ajusta el valor según sea necesario */
  left: 850px; /* Ajusta el valor según sea necesario */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Puedes ajustar la alineación según sea necesario */
  color: white;
  font-size: 34px;
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  z-index: 2;
  opacity: 0.550000011920929;
}

.square {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.image-card {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 30px;
  margin-top: 30px; /* Ajusta la separación superior */
}

.titlecard {
  text-align: center;
  margin-bottom: 10px;
}

.textcard {
  text-align: center;
}




</style>
  

  
  
  
  
  

`;

export default styles;