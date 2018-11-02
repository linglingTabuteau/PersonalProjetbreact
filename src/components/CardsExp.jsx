import React, {Component} from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container, Row, Col} from 'reactstrap';
import Bouton from './Bouton';

const CardsExp = (props) => {
      return (
        <Card>
            <CardImg top width="100%" src={props.card.img}/>
            <CardBody>
                <CardTitle>{props.card.theme}</CardTitle>
                <CardText>{props.card.text}</CardText>
                <Bouton />
            </CardBody>
        </Card>
      );
  }

export default CardsExp;