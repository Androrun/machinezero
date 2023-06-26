import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = () => {
  return (
    
    <Card className="square">
      <img
        src="https://res.cloudinary.com/duun7esh0/image/upload/v1687296086/image_card_s0iblg.jpg"
        alt="Imagen 1"
        className="image-card"
      />
      <h2 className="titlecard">Introducing the first<br /> annual AI Film Festival</h2>
      <p className="textcard">Of this year's hundreds of<br /> submissions, just ten finalists were<br /> named by our panel of jurors. View all<br /> ten films below.</p>
    </Card>
  );
};

export default CardComponent;


