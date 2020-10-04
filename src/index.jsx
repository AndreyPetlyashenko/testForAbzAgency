
import './styles/styles.scss'
import React from 'react'
import { render } from 'react-dom'
import Header from './Header.jsx'
import ManLaptop from './manLaptop.jsx'
import Users from './users.jsx'
import Register from './Register.jsx'
import "./styles/fonts/OpenSans-Regular.ttf"
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, applyMiddleware } from "redux"
import {rootReducer} from './redux/rootReducer'
import { Provider } from "react-redux"

import thunk from 'redux-thunk';
import logger from "redux-logger"

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const App = () => {
    return (
        <div>
            <Header />
            <ManLaptop />
            <Users />
            <Register />
        </div>

    )
}

render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app'))
