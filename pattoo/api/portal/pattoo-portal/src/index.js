/*Import essential React components*/
import React from 'react';
import ReactDOM from 'react-dom';

/*Import routing components*/
import { BrowserRouter, Route, Switch } from "react-router-dom";

/*Import custom components*/
import Home from './Home';
import Login from './Login';
import Users from './Users';
import Agents from './Agents';
import PurgeData from './PurgeData';

/*Import stylesheet*/
import './index.css';

/*Where components are rendered*/
ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Home} />
          <Route path="/admin/login" component={Login} />
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/agents" component={Agents} />
          <Route path="/admin/purge" component={PurgeData} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
