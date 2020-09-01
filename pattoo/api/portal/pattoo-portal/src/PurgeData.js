import React from 'react';

import Navigation from './Navigation';
import PurgeForm from './PurgeForm';

class PurgeData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            oldestDay: 0
        }

        this.getOldestDay = this.getOldestDay.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getOldestDay = () => {
        let self = this;
        const purge_path = '/api/purge'
        const purge_options = {
            method: 'GET'
        }

        fetch(purge_path, purge_options).then(function (response){
            return response.json();
        }).then(function (jsonResponse){
            let pass = jsonResponse.data.message;
            if (pass === 'Login first') {
                alert("Please login");
                self.props.history.push('/login');
            }

            if (jsonResponse.data.message === 'Query ran'){
                self.setState({
                    oldestDay: jsonResponse.data.oldestDay
                })
            }
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidMount(){
        this.getOldestDay()
    }

    handleChange(event){
        this.getOldestDay()
    }

    render() {
        return (
            <div className="flex flex-col md:grid md:grid-cols-7">
                <Navigation current={"purge"}/>
                <div className="md:col-span-6">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider my-3 py-2">Purge Data</div>
                    <div className="md:px-10 flex justify-center text-center py-8 mx-5 bg-white shadow rounded border-b border-gray-200">
                        <div className="w-auto bg-white-300">
                            <div className="block mb-3 italic font-light">
                                Oldest Data: {this.state.oldestDay} days
                            </div>
                            <PurgeForm reloadDays={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PurgeData;