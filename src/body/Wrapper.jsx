import React, { Component } from 'react';
import CarouselPromo from './CarouselPromo';
// import BarreRecherche from './BarreRecherche';
import ListeVoyage from './ListeVoyage';
import ContactSection from './ContactSection';

class Wrapper extends Component{
   constructor(props){
       super(props);
       this.state = {};
   }

// Attention : on ne peut pas utiliser render() without class 
// if utiliser juste const Wrapper on peut juste utiliser return pas render()
   render(){
    return (
        <div>
            <CarouselPromo />
            {/*rajouter ici <BarreRecherche /> */}
            <ListeVoyage />
            <ContactSection /> 
        </div>
                 
        );
   }
        
    
}

export default Wrapper;



