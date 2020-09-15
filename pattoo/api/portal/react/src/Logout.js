import React from 'react';

class Logout extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let self = this;
        const logout_path = '/api/logout'
        const logout_options = {
            method: 'GET'
        }

        fetch(logout_path, logout_options).then(function (response){
            return response.json();
        }).then(function (jsonResponse){
            let pass = jsonResponse.data.message;
            if (pass === 'Login first') {
                alert("Please login first");
                self.props.history.push('/login');
            } else if (jsonResponse.data.message === 'Logged out'){
                alert("Logged out");
                self.props.history.push('/login');
            } else {
                self.props.history.push('/login');
            }
        }).catch(function (error){
            console.log(error);
        })
    }

    render(){
        return <div>{null}</div>;
    }
}

export default Logout;