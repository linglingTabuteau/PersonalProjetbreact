import React, {Component} from 'react';
import Navbarvoyage from './Component-DetailVoyage/Navbarvoyage';
import RajouterFilm from './Component-DetailVoyage/RajouterFilm';
import CarouselFilm from './Component-DetailVoyage/CarouselFilm';



class DetailVoyage extends Component {
    render () {
        return (
            <div>
                <Navbarvoyage/>
                <CarouselFilm />
                <RajouterFilm />
            </div>
        )
    }
}

export default DetailVoyage;