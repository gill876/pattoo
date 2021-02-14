import React from 'react';

import Navigation from './Navigation';
import UsersHead from './UsersHead';
import UsersRow from './UsersRow';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: null,
            rowState: false
        }
        this.viewTable = this.viewTable.bind(this);
        this.fetchFailed = this.fetchFailed.bind(this);
        this.rowChange = this.rowChange.bind(this);
    }

    rowChange = (event) => {
        this.setState({
            rowState: !this.state.rowState
        })
    }

    viewTable = (user_rows) => {
        return (
            <div className="flex flex-col md:grid md:grid-cols-7">
                <Navigation current={"users"}/>
                <div className="flex flex-col justify-center md:col-span-6">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Manage Users</div>
                    <div className="md:px-10 py-8 w-auto md:flex md:flex-col md:justify-center overflow-x-scroll">
                        <table className="w-auto bg-white overflow-y-scroll shadow rounded border-b border-gray-200 justify-center">
                            <UsersHead/>
                            {user_rows}
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let self = this;
        const user_path = '/api/user'
        const user_options = {
            method: 'GET'
        }

        fetch(user_path, user_options).then(function (response){
            return response.json();
        }).then(function (jsonResponse){
            let users = []
            let pass = jsonResponse.data.message;
            if (pass === 'Login first') {
                alert("Please login");
                self.props.history.push('/login');
            } else {
                users = jsonResponse.data.users;
                if (users.length > 0){
                    const user_rows = users.map((user)=>
                        <UsersRow key={user.idx_user} user={user} updateRow={self.rowChange}/>
                    )

                    self.setState({
                        display: self.viewTable(user_rows)
                    });
                }
            }
        }).catch(function (error) {
            self.setState({
                display: self.fetchFailed(error)
            })
        })
    }

    fetchFailed = (error) => {
        console.log("Error: " + error);
    }

    render() {
        return (
            this.state.display
        )
    }
}

export default Users;