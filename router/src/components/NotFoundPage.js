import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <NavLink to="/">Go home betch</NavLink>
    </div>
);

export default NotFoundPage;