import React from 'react';

class PurgeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: ''
        }

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
        event.preventDefault()
        
        const csrfToken = document.getElementById('csrf-token').getAttribute("content");
        const purgeForm = document.getElementById('purge-form');
        const purgeData = new FormData(purgeForm);
        const purge_path = '/api/purge'
        const purge_options = {
            method: 'POST',
            headers: { 'X-CSRFToken': csrfToken },
            credentials: 'same-origin',
            body: purgeData
        }

        fetch(purge_path, purge_options).then(function(response){
            return response.json();
        }).then(function (jsonResponse){
            if (jsonResponse.data.message === 'Purged') {
                alert("Data purged successfully");
                self.props.reloadDays(event)
            }
        }).catch(function (error){
            console.log(error);
        });
    }

    render() {
        return (
            <form id="purge-form" className="flex flex-col items-center" method="POST" onSubmit={this.handleSubmit}>
                <div className="inline">
                    Purge data after 
                    <input 
                        id="purge-days" 
                        type="text"
                        name="days"
                        value={this.state.days}
                        className="inline shadow appearance-none border rounded mx-1 w-10 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={this.handleInputChange}
                        /> days 
                </div>
                <button
                    id="purge-button" className="btn mt-5 border-2 border-red-600 shadow-md text-red-600 hover:text-white hover:bg-red-600 transition ease-out duration-500 focus:outline-none"
                    type="submit"
                    >
                        Purge
                </button>
            </form>
        )
    }
}

export default PurgeForm;