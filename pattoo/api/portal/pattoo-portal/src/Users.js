import React from 'react';

import Navigation from './Navigation';
import UsersHead from './UsersHead';
import UsersRow from './UsersRow';

class Users extends React.Component {
        render() {
            const test_users = [{idx_user: 1,first_name: "Cargill",last_name: "Seiveright",username: "sivrite",user_type: "admin"},
                                {idx_user: 2,first_name: "John",last_name: "Brown",username: "jbrown",user_type: "standard"},
                                {idx_user: 3,first_name: "Mary",last_name: "Jane",username: "mjane",user_type: "standard"},
                                {idx_user: 4,first_name: "Joy",last_name: "Campbell",username: "jcamp",user_type: "standard"}]
            const user_rows = test_users.map((user)=>
                <UsersRow key={user.idx_user} user={user}/>
            );
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
            );
    }
}

export default Users;