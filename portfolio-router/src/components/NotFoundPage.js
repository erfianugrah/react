import React from 'react';
import {NavLink} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <NavLink to="/">Home Page</NavLink>
    </div>
);

export default NotFoundPage;