import React from 'react';
import Navigation from './Navigation';
import AgentsHead from './AgentsHead';
import AgentsRow from './AgentsRow';

class Agents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: null,
            rowState: false,
            agents: []
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

    viewTable = (agent_rows) => {
        return (
            <div className="flex flex-col md:grid md:grid-cols-7">
                <Navigation current={"agents"}/>
                <div className="flex flex-col justify-center md:col-span-6">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider mt-3 pt-2">Manage Agents</div>
                    <div className="md:px-10 py-8 w-auto md:flex md:flex-col md:justify-center overflow-x-scroll">
                        <table className="w-auto bg-white shadow overflow-y-scroll rounded border-b border-gray-200 justify-center">
                            <caption className="pl-4 pt-4 text-left tracking-widest uppercase font-semibold bg-gray-800 text-white">All Available Agents</caption>
                            <AgentsHead/>
                            {agent_rows}
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    fetchFailed = (error) => {
        console.log("Error: " + error);
    }

    render() {
        let self = this;
        const agent_path = '/api/agent'
        const agent_options = {
            method: 'GET'
        }

        fetch(agent_path, agent_options).then(function (response){
            return response.json();
        }).then(function (jsonResponse){
            console.log(jsonResponse);
            let pass = jsonResponse.data.message;
            if (pass === 'Login first') {
                alert("Please login");
                self.props.history.push('/login');
            }

            self.setState({
                agents: jsonResponse.data.agents
            })

            if (self.state.agents.length > 0){
                const agent_rows = self.state.agents.map((agent)=>
                    <AgentsRow key={agent.idx_agent} agent={agent} updateRow={self.rowChange}/>
                )

                self.setState({
                    display: self.viewTable(agent_rows)
                })
            }
        }).catch(function (error) {
            self.setState({
                display: self.fetchFailed(error)
            })
        })

        return (
            this.state.display
        );
    }
}

export default Agents;