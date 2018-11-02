import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';
import Infopratique from './Infopratique';
import Programme from './Programme';
import './InfoVoyage.css';

const InfoVoyage =()=>{
    return (
        <BrowserRouter>
          <div>
            <Nav tabs>
                <NavItem className='navitem'>
                    <Link exact to='/'>
                            <h2>Programme</h2>
                    </Link>
                </NavItem>
                <NavItem className='navitem'>
                    <Link to='/infopratique'>
                        <h2>Infos Pratiques</h2>
                    </Link>
                </NavItem>
            </Nav>

            <Switch>
                <Route exact path='/' component={Programme}/>
                <Route exact path='/infopratique' component={Infopratique}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
}
export default InfoVoyage;