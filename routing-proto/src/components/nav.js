import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
            <Link to="/" className="nav-link">Welcome</Link>
        </li>
        <li className="nav-item">
            <Link to="/our-macarons" className="nav-link">Our Macarons</Link>
        </li>
        <li className="nav-item">
            <Link to="/gifts-parties" lassName="nav-link">Gifts and parties</Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" lassName="nav-link">Contact</Link>
        </li>
    </ul>
)