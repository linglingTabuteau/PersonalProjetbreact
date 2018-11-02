import React, { Component } from 'react';
import CardsExp from '../components/CardsExp';
import CardsDestination from '../components/CardsDestination';
import './ListeVoyage.css';

import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container, Row, Col} from 'reactstrap';

const cardsExp = [{
  img: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/eb/Logo_Ghibli.svg/1200px-Logo_Ghibli.svg.png',
  theme: 'On montage',
  text: 'Trois jours en mer seront une expérience inoubliable.'
}, {
  img: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/eb/Logo_Ghibli.svg/1200px-Logo_Ghibli.svg.png',
  theme: 'On bateau',
  text: 'Trois jours en mer seront une expérience inoubliable.'
}];

const card= [{
    cardtitle: "Paris", cardsubtitle: "Du 10 au 13 Novembre 2018", photo:"https://upload.wikimedia.org/wikipedia/fr/thumb/e/eb/Logo_Ghibli.svg/1200px-Logo_Ghibli.svg.png", cardtext:"La Tour Eiffel, le quartier Montmartre, le musée du Louvre... Découvrez tout le patrimoine historique et culturel d'une ville au mille facettes.", prix: "379€",
 },{
    cardtitle: "Barcelone", cardsubtitle:"Du 03 au 07 Mars 2019", photo:"https://upload.wikimedia.org/wikipedia/fr/thumb/e/eb/Logo_Ghibli.svg/1200px-Logo_Ghibli.svg.png", prix: "429€",
 }]
class ListeVoyage extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards : cardsExp,
    }
  }
  render() {
    return (
<div>
    <Container className="cardsDes-box" >
    <h2 id ='destinations'>Film Ghibli</h2>
        <Row>
          {
             this.state.cards.map((card, index) =>(
              //  on ne mets pas {} après => car on voudrait retourner le composant  <CardsDestination />
              // je rajoute <col>dans Composant <CardsDestination> pour que ce soit répété dans chaque carte en utilisant map()
              <CardsDestination 
              id = {index}
              img ={card.img}
              theme={card.theme}
              text={card.text}
              />
            ))
          }
         
        </Row>
</Container>
        <Container className="cardsExp-box">
        <h2 id ='experiences'>Film Disney</h2>
          <Row>
            <Col xs="12" sm="6" lg="4" className="pb-2">
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
            <Col xs="12" sm="6" lg="4" pd-2>
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
             <Col xs="12" sm="6" lg="4">
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
               <Col xs="12" sm="6" lg="4">
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
          </Row>
        </Container>
</div>
    );
  }
}

export default ListeVoyage;
