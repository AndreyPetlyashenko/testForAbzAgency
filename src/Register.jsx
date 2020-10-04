import React from "react"



export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: "",
            tokenLink: "https://frontend-test-assignment-api.abz.agency/api/v1/token",
            name: "",
            email: "",
            phone: "",
            position: "1"
        }
        this.fileInput = React.createRef();
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = async (e, data, ...props) => {
        e.preventDefault()

        let response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
        let dataToken = await response.json();

        this.setState(
            (state, props) => ({
                token: dataToken.token
            })
        )

        var formData = new FormData();
        var fileField = this.fileInput.current.files[0];

        formData.append("position_id", this.state.position);
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("phone", this.state.phone);
        formData.append("photo", fileField);

        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",
            {
                method: "POST", body: formData,
                headers: {
                    "Token": this.state.token, // get token with GET api/v1/token method 
                },
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    alert(data.message)

                } else {
                    alert(data.message)
                    console.log(data.fails)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    render() {
        return (
            <div className="container">
                <div className="registerContainer" id="registration">

                    <h1 className="mainTitle">Register to get a work</h1>
                    <p>Attention! After successful registration and alert, update the list
                    of users in the block from the top
                    </p>

                    <div className="formContainer">
                        <form id="myForm" onSubmit={this.onSubmit} >
                            <div className="form-group column">
                                <label htmlFor="name" className="row-sm-2 row-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="name" id="name"
                                        value={this.state.name} onChange={this.handleChange}
                                        placeholder="Your name" required />
                                </div>
                            </div>
                            <div className="form-group column">
                                <label htmlFor="email" className="row-sm-2 row-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" name="email" id="email"
                                        value={this.state.email} onChange={this.handleChange}
                                        placeholder="Your email" />
                                </div>
                            </div>
                            <div className="form-group column">
                                <label htmlFor="phone" className="row-sm-2 row-form-label">Phone number</label>
                                <div className="col-sm-10">
                                    <input type="phone" className="form-control" name="phone" id="phone"
                                        value={this.state.telephone} onChange={this.handleChange}
                                        placeholder="+380 XX XXX XX XX" />
                                    <label htmlFor="phone" id="notice">Enter phone number in open format</label>
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <label htmlFor="">Select your position</label>
                                 
                                <div className="row">
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position" id="position1"
                                                value="1"
                                                checked={this.state.position === "1"}
                                                onChange={this.handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="position1">
                                                Frontend developer
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position" id="position2"
                                                value="2"
                                                checked={this.state.position === "2"}
                                                onChange={this.handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="position2">
                                                Backend developer
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position" id="position3"
                                                value="3"
                                                checked={this.state.position === "3"}
                                                onChange={this.handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="position3">
                                                Designer
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position" id="position4"
                                                value="4"
                                                checked={this.state.position === "4"}
                                                onChange={this.handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="position4">
                                                QA
                                            </label>
                                        </div>

                                    </div>
                                    <div className="custom-file">
                                        <p>Photo</p>
                                        <input type="file" className="custom-file-input" id="customFile" name="img" ref={this.fileInput} />
                                        <label className="custom-file-label" htmlFor="customFile">Upload your photo</label>
                                    </div> 
                                </div>
                            </fieldset>
                            <div className="btnContainer">
                                <button type="submit" className="btn btn-primary" >Sign up now!</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        )
    }
}