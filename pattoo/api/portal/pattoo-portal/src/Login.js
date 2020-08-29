import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    };
    
    handleSubmit(event) {
        let self = this;
        event.preventDefault();

        const csrfToken = document.getElementById('csrf-token').getAttribute("content");
        const loginForm = document.getElementById('login-form');
        const loginData = new FormData(loginForm);
        const login_path = '/api/login'
        const login_options = {
            method: 'POST',
            headers: { 'X-CSRFToken': csrfToken },
            credentials: 'same-origin',
            body: loginData
        }

        fetch(login_path, login_options).then(function(response){
            return response.json();
        }).then(function (jsonResponse){
            if (jsonResponse.data.message === 'Login successful') {
                self.props.history.push('/admin/agents');
            }
        }).catch(function (error){
            console.log(error);
        });
    }

    render() {
        return (
        <div className="container flex content-center items-center min-h-screen min-w-full">
            <div className="flex flex-col items-center min-w-full">
                {/*<div className="items-center text-center font-mono text-base md:text-2xl font-bold tracking-wider my-5">
                    Welcome to the Management Portal
                </div>*/}

                <div className="items-center w-1/5 sm:w-1/6 flex flex-col items-center">
                    <img className="" src="/static/react/img/pattoo.png" alt="Pattoo Logo"/>
                    <span className="mt-5 uppercase text-base md:text-2xl text-center">sign in</span>
                </div>  

                <div>
                    <form id="login-form"  className="flex flex-col items-center" method="POST" onSubmit={this.handleSubmit}>
                        <input id="user-input" type="text" name="username"
                            placeholder="Username" value={this.state.username}
                            onChange={this.handleInputChange}
                            className="border-b-2 border-gray-500 mt-3 text-center shadow-md rounded-full focus:outline-none focus:shadow-outline">
                        </input>

                        <input id="password-input" name="password"
                            type="password" value={this.state.password} 
                            placeholder="Password" onChange={this.handleInputChange}
                            className="border-b-2 border-gray-500 mt-3 text-center shadow-md rounded-full focus:outline-none focus:shadow-outline">
                        </input>
                        <button id="login-button" className="btn mt-5 border-2 border-gray-500 shadow-md text-gray-800 hover:text-white hover:bg-gray-500 transition ease-out duration-500 focus:outline-none" type="submit">Login</button>
                    </form>
                </div>  
            </div>
        </div>
        );
    }
}

export default Login;