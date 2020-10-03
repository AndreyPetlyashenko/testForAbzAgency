import React from 'react'
import './babel'

import 'bootstrap/dist/css/bootstrap.min.css'


export default class ManLaptop extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="manLaptopContainer">
                    <h2 className="titleLaptop">
                        
                        
                        Let's get acqu<span>ainted</span>
                    </h2>
                    <div className="contentContainer">
                        <img className="svgLaptop" src="../DATA/img/man-laptop-v1.svg" alt="laptop-man" />
                        <div className="textContainer">
                            <h2 className="secondTitle">
                                I am cool frontend developer
                            </h2>
                            <p className="firstPar">
                                <span>We will evaluate how clean your approach to writing CSS </span> 
                                and javascript  code is. You can use any CSS and javascript
                                3rd party libraries without any restriction.
                            </p>
                            <p className="secondPar">
                                <span>If 3rd party css/javascript libraries are added to the project via</span> bower/npm/yarn you
                                will get bonus points. If you use any task runner (gulp/webpack) you will get bonus as well.
                                Slice servise directory page PSD mockup into HTML5/CSS3.
                            </p>
                            <a href="#">Sing up now</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}