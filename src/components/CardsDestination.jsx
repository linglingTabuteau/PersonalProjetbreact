import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './Card.css';
import {Link} from 'react-router-dom';

const CardsDestination = (props) => {
  return (
    <Col xs="12" sm="6" lg="4" pd-2>
      <Card className="text-center h-100 card">
        <CardTitle>{props.theme}</CardTitle>
        <CardSubtitle>{props.text}</CardSubtitle>
        
          <div className="image">
            <CardImg width="100%" src={props.img} alt="Paris" className="image1" />
          </div>
      
        <CardBody h-100>
          <CardText className="text-left">{props.text}</CardText>
          {/* on doit mettre <Link></Link> dehors du <Button> pour que ca change à un autre Composant */}
          <div className="align-items-center"><Link to ='/detailvoyage'><Button className="button">Plus de détails</Button></Link> <p className="prix">{props.theme}</p></div>
        </CardBody>
      </Card>
  </Col>
  );
};

export default CardsDestination;