import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores';
// import App from './containers/App';
import App from './components/App.react';
import About from './components/about/About.react';
import Home from './components/home/Home.react';
import Releases from './components/releases/Releases.react';
import Contact from './components/contact/Contact.react';


const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/releases" component={Releases}/>
        <Route path="/contact" component={Contact}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
