import React from 'react';
import Head from 'next/head';
import styles from './styles';
import ImageContainer from './components/ImageContainer'; 
import BlackOne from './components/Blackone';
import 'antd/dist/reset.css';
import Square from './components/Square';



function Landing() {

  return (
    <div>
      <Head>
        <title>Landing Page</title>
      </Head>

      <style jsx>{styles}</style>

      <ImageContainer />
      <BlackOne />

      <div className="black-overlay">
        <div className="purple-container">
          <img
            src="https://res.cloudinary.com/duun7esh0/image/upload/v1687296698/image_center_yukkop.png"
            alt="image2"
            className="image2"
          />

          <div className="about-us">About us</div>
          <div className="tech-center">Multidisciplinar Tech innovation and research center</div>
          <div className="rectangle1">
            <p class="textrectangle1">Of this year’s hundreds of <br></br>
              submissions, just ten finalists were <br></br> named by our panel of jurors. View <br></br> all ten films below.</p>
          </div>


          <div className="rectangle2">
            <img
              src="https://res.cloudinary.com/duun7esh0/image/upload/v1687541172/computadora_ielxdh.png"
              alt="image3"
              className="image3"
            />
          </div>
          <div className="rectangle3">
            <img
              src="https://res.cloudinary.com/duun7esh0/image/upload/v1687541173/robot_wvutgs.png"
              alt="image4"
              className="image4"
            />
          </div>

          <div className="purple-title1">Introducing the first annual AI Film Festival</div>
          <div className="purple-text1">Of this year’s hundreds of submissions, just ten finalists were named
            <br />by our panel of jurors. View all ten films below.</div>

          <div className="purple-title2">Introducing the first annual AI Film Festival</div>
          <div className="purple-text2">Of this year’s hundreds of submissions, just ten finalists were named
            <br />by our panel of jurors. View all ten films below.</div>

          <img
            src="https://res.cloudinary.com/duun7esh0/image/upload/v1687296656/imagencaras_npfjme.png"
            alt="imagen-caras"
            className="image5"
          />

          <img
            src="https://res.cloudinary.com/duun7esh0/image/upload/v1687541278/logo2_xbqt5w.png"
            alt="imagen-3logos"
            className="image6"
          />

          <div className="text-center">
            Introducing the first annual AI Film Festival - powered by <br></br>
            Runway. A celebration of the art and artists making the <br></br>
            impossible at the forefront of AI filmmaking.
          </div>



          <div className="overlay">
            <div id="textOverlay">Experiments</div>
            <div className="purple-overlay"></div>
          </div>

          <div className="container">

            <div className="row">
             <Square />
             <Square />
             <Square />
            </div>
            <div className="row">
              <div className="square">
                <img src="https://res.cloudinary.com/duun7esh0/image/upload/v1687296086/image_card_s0iblg.jpg" alt="Imagen 1" className="image-card" />
                <h2 className="titlecard">Introducing the first <br /> annual AI Film Festival</h2>
                <p className="textcard">Of this year's hundreds of <br /> submissions, just ten finalists were <br /> named by our panel of jurors.
                  View all<br /> ten films below.</p>
              </div>
              <div className="square">
                <img src="https://res.cloudinary.com/duun7esh0/image/upload/v1687296086/image_card_s0iblg.jpg" alt="Imagen 1" className="image-card" />
                <h2 className="titlecard">RaBit App, Intelligent<br /> Decisions</h2>
                <p className="textcard">Of this year's hundreds of <br /> submissions, just ten finalists were <br /> named by our panel of jurors.
                  View all<br /> ten films below.</p>
              </div>
              <div className="square">
                <img src="https://res.cloudinary.com/duun7esh0/image/upload/v1687296086/image_card_s0iblg.jpg" alt="Imagen 1" className="image-card" />
                <h2 className="titlecard">Introducing the first <br /> annual AI Film Festival</h2>
                <p className="textcard">Of this year's hundreds of <br /> submissions, just ten finalists were <br /> named by our panel of jurors.
                  View all<br /> ten films below.</p>
              </div>
            </div>
          </div>

          <a href="#" className="button">Ver más</a>

          
          <div className="form-container" id="form-container">
            <h2>Contactanos</h2>
            <form>
              <input type="email" placeholder="Correo electrónico" required />
              <textarea placeholder="Mensaje" required></textarea>
              <button type="submit">Enviar</button>
            </form>
            <p>Introducing the first annual AI Film Festival - powered by<br></br> Runway. A celebration of the art and artists making the <br></br> impossible at the forefront of AI filmmaking.</p>
          </div>
        </div>


        <div className="text-footer">
          Organizaciones Adjuntos
        </div>

        <div className="logo-footer1">
          <img src="https://res.cloudinary.com/duun7esh0/image/upload/v1687532080/logo-footer1_cpnh55.png" alt="Imagen" style={{ marginRight: '10px' }} />
          <p>Coders Land</p>
        </div>

        <div className="logo-footer2">
          <img src="https://res.cloudinary.com/duun7esh0/image/upload/v1687532096/logo-footer2_gjb91m.png" alt="Imagen" style={{ marginRight: '10px' }} />
          <p>CC2 Club<br></br>
            Space & Science</p>
        </div>



      </div >
    </div >
  );
}

export default Landing;



