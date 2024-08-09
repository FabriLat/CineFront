import { Button, Card } from "react-bootstrap";


const MovieItem = ({ id, title, director, description, imageUrl }) => {

  return (
    <Card className="mb-4" style={{borderRadius:"5%", backgroundColor:"gray", maxHeight:"500px"}} key={id}>
      <Card.Body>
        <Card.Title><h2>{title}</h2></Card.Title>
        <Card.Subtitle><h3>{director}</h3></Card.Subtitle>
        <Card.Img
            alt="Portada película"
            src={imageUrl}
            style={{
            width: '100%',
            height: '250px', 
            borderRadius: '5%'}}
            />

        <p>{description}</p>
        <Button className="px-5" variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );
};  

export default MovieItem;
