import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Nav from './components/nav';
import OurMacarons from './components/our_macarons';
import GiftParties from './components/gifts_parties';
import Contact from './components/contact';


export default () => (
    <div className="container">
        <Nav/>
        <Route exact path="/" component ={Welcome}/>
        <Route path="/our-macarons" component={OurMacarons}/>
        <Route path="/gifts-parties" component={GiftParties}/>
        <Route path="/contact" component={Contact}/>
    </div>
);