import { Card } from "react-bootstrap";

export const Character = ({ character }) => {
  return (
    <Card className="m-2 p-0" style={{ width: "10rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body className="p-2">
        <Card.Title>{character.name}</Card.Title>
        <Card.Text className="small">Origen: {character.origin.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};
