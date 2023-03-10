import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Project(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.projectName}</Card.Title>
        <Card.Text>
          {props.descriptionShort}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.tech1}</ListGroup.Item>
        <ListGroup.Item>{props.tech2}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={props.github} target="_blank">github</Card.Link>
        <Card.Link href={props.liveLink} target="_blank">live</Card.Link>
      </Card.Body>
    </Card>
  );
}

