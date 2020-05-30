import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home betch</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go create betch</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Go edit betch</NavLink>
        <NavLink to="/help" activeClassName="is-active">Go help betch</NavLink>
    </header>
);

export default Header;