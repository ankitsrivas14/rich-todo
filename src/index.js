import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom"

import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';


const routing = (
  <Router>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/:param"><App /></Route>
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
