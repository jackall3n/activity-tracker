
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import reduxImmutableState from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import App from "./components/app";
import reducers from "./store/reducers";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    reducers,
    applyMiddleware(thunk, middleware, reduxImmutableState())
);

console.log(ConnectedRouter);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("react-root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
