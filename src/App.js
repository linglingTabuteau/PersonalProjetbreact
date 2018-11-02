import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './header/NavBar';
import Footer from './footer/Footer';
import Wrapper from './body/Wrapper';
import DetailVoyage from './components/DetailVoyage';
import Admin from './Admin/Admin';
import ModificationFilm from './Admin/ModificationFilm';


class App extends Component {
  render() {
    return (
      <div className="App">
     {/* on a mis NavBar et Footer en dehors de Switch car on veut les deux sections soient présentes sur chaque page du site */}
        <NavBar />
        <Switch>
          {/* par défault, on voit le page avec le Link '/' et on met des caractères miniscules pour path*/}
          <Route exact path="/" component={Wrapper} />
          <Route path="/detailvoyage" component={DetailVoyage} />
          <Route path="/admin" component={Admin}/>
          <Route path='/adminmodification-film' component={ModificationFilm} />

        </Switch>
        <Footer /> 
      </div>
    );
  }
}

export default App;
