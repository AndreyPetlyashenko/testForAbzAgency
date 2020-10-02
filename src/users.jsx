import React from "react"
import "./babel"
import "./styles/fonts/OpenSans-Regular.ttf"
import "bootstrap/dist/css/bootstrap.min.css"



export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseLink: "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",

            usersData: [],
            page: 0,
            totalPages: 300
        }
    }
    getUsers = () => {
        let baselink = this.state.baseLink

        fetch(baselink, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                let nextLink = data.links.next_url

                let info = this.state.usersData.concat(data.users)

                let page = this.state.page + 1

                let totalPages = data.total_pages

                this.setState(
                    (state, props) => ({
                        baseLink: nextLink,
                        usersData: info,
                        page: page,
                        totalPages: totalPages
                    })
                )
            });
    }
    componentDidMount() {
        this.getUsers()
    }
    render() {
        const users = this.state.usersData

        if (users) {
            var contentUsers = users.sort((a, b) => b.registration_timestamp - a.registration_timestamp);

            contentUsers = contentUsers.map((user) => {
                return (
                    <div id={user.id} className="card" key={user.registration_timestamp}>
                        <img src={user.photo} alt="userPhoto" />
                        {
                            user.name.length <= 14 ?
                                <h3 className="userName smallName">{user.name}</h3> :
                                <h3 className="userName">{user.name}</h3>
                        }
                        <p className="userPosition">{user.position}</p>
                        <p className="userEmail">{user.email}</p>
                        <p className="userPhone">{user.phone}</p>
                    </div>
                )
            })

        }
        return (
            <div className="container">
                <div className="usersContainer">
                    <div className="headOfUsers">
                        <h1 className="usersTitle">Our cheerful users</h1>
                        <p className="usersAtention">
                            Attention! Sorting users by
                            registration date
                        </p>
                    </div>
                    <div id="users">
                        {contentUsers}
                    </div>
                    {this.state.page === this.state.totalPages ? 
                    null : 
                    <button className="btn btn-info" onClick={this.getUsers}>Show more</button>}
                </div>
            </div>
        )
    }
}

