import React from 'react'
import './babel'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            lock: false
        }
    }
    showMobileMenu = async () => {
        await this.setState(
            {
                active: !this.state.active,
                lock: !this.state.lock
            })

        if (this.state.lock) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }

    render() {

        let additionalItems = ["Terms and Conditions", "<hr />", "How it works", "Partnership", "Help", "Leave a testimonial",
            "Contact us", "<hr />", "Articles", "Our news", "Testimonials", "Licenses", "Privacy policy", "<hr />"]

        additionalItems = additionalItems.map((item) => {
            let result;
            item === "<hr />" ? result = <hr /> : result = <li><a href="#registration" className="headerItem">{item}</a></li>
            return result
        })

        return (
            <div className="wrapper" >
                <header className="header">
                    <div className="container">
                        <div className="headerBody">
                            <a href="#" className="logoHeader">
                                <img src="../DATA/img/favicon-32x32.png" alt="" />
                                <span>TESTTASK</span>
                            </a>
                            <div className={"headerBurger " + this.state.active} onClick={this.showMobileMenu}>
                                <span></span>
                            </div>
                            <nav className={"headerMenu " + this.state.active}>
                                <ul className="headerList">
                                    <li><a href="#registration" className="headerItem">About me</a></li>
                                    <li><a href="#registration" className="headerItem">Relationships</a></li>
                                    <li><a href="#registration" className="headerItem">Requirements</a></li>
                                    <li><a href="#registration" className="headerItem">Users</a></li>
                                    <li><a href="#registration" className="headerItem">Sign Up</a></li>
                                    {
                                        this.state.active &&
                                        <div>
                                            {additionalItems}
                                        </div>
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>

                </header>
                <div className="container">
                    <div className="newContainer">
                        <div className="mainImgContainer">
                            <div className="headerContent">
                                <h1 className="mainTitle">test assignment for frontend <span>developer position</span></h1>
                                <p className="headerParagraph">
                                    <span>We kindly remind you that your test assignment should be submitted
                                as a link to github/bitbucket repository.</span>
                                please be patient, we consider and respond to every application
                                that meets mininmum requirements.
                                we look forward to your submisson. Good luck! The photo has to scale
                                in the banner area on the different screens
                            </p>
                                <a  href="#registration" className="btn btn-danger">Sing up now</a>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

        )
    }
}