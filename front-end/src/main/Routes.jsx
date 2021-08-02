import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

const Router = props =>
    <switch>
        <Route exact path='/' component={ Home } />
        <Route path='/users' component={ UserCrud } />
        <Redirect from='*' to='/' />
    </switch>

export default Router;