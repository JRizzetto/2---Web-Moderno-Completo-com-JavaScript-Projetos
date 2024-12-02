import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserCrud} />
        {/* Redireciona qualquer rota não encontrada para "/" */}
        <Redirect from="*" to="/" />
    </Switch>
);
