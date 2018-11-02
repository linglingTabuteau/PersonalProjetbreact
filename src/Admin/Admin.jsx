import React, { Component } from 'react';
import { Button, Container, Row, } from 'reactstrap';
import { Link } from 'react-router-dom';
import ModificationFilm from './ModificationFilm';
import './Admin.css';

class Admin extends Component {
//   constructor(props){
//       super(props);
//       this.state={

//       }
//   }
    render(){
        return(
            <div className='margintop'>
                <Link to ='/adminmodification-film'> <Button className='marginButton'color='success'> Modifier un film Lien par Link to Component</Button> </Link>
                <ModificationFilm />
            </div>
        );
    }
}

export default Admin;