
const ImageContainer = () => {
 

  return (
    <div className="image-container">
      <div className="textHead1">High Technology Lab</div>
      <div className="textHead2">
        <a href="#textOverlay">Experiments</a>
      </div>
      <div className="textHead3">
        <a href="#form-container">About</a>
      </div>

      <div className="title-container">
        <div className="title">MACHINE ZERO</div>
      </div>

      <img
        src="https://res.cloudinary.com/duun7esh0/image/upload/v1687540990/image_one_oqbb8l.jpg"
        alt="Imagen 1"
        className="image"
      />
      <div className="image-overlay"></div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/hicayypkI7g"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="560" // Ajusta el ancho del video según tus necesidades
          height="360" // Ajusta la altura del video según tus necesidades
        ></iframe>
      </div>
      <img
        src="https://res.cloudinary.com/duun7esh0/image/upload/v1687296612/logo_head_adsxd9.png"
        alt="logoinit"
        className="logoinit"
      />
      <img
        src="https://res.cloudinary.com/duun7esh0/image/upload/v1687541078/logo1_qjf1ra.png"
        alt="Logo"
        className="logo"
      />

      
    </div>
  );
};

export default ImageContainer;