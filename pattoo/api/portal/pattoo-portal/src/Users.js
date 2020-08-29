import React from 'react';

import Navigation from './Navigation';
import UsersHead from './UsersHead';
import UsersRow from './UsersRow';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: null
        }
        this.viewTable = this.viewTable.bind(this);
        this.fetchFailed = this.fetchFailed.bind(this);
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

    fetchFailed = (error) => {
        alert("Fetch failed" + error);
    }

    render() {
        let self = this;
        const user_path = '/api/user'
        const user_options = {
            method: 'GET'
        }

        let users = []
        fetch(user_path, user_options).then(function (response){
            return response.json();
        }).then(function (jsonResponse){
            users = jsonResponse.data.users;
            const user_rows = users.map((user)=>
                <UsersRow key={user.idx_user} user={user}/>
            )

            self.setState({
                display: self.viewTable(user_rows)
            });
        }).catch(function (error) {
            self.setState({
                display: self.fetchFailed(error)
            })
        })

        return (
            this.state.display
        )
    }
}

export default Users;