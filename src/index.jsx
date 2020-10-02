import './babel'
import './styles/styles.scss'
import React from 'react'
import { render } from 'react-dom'
import Header from './Header.jsx'
import ManLaptop from './manLaptop.jsx'
import Users from './users.jsx'
import Register from './Register.jsx'
import "./styles/fonts/OpenSans-Regular.ttf"
import 'bootstrap/dist/css/bootstrap.min.css';


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

render(<App />, document.getElementById('app'))
