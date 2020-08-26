import React from 'react';
import Navigation from './Navigation';
import AgentsHead from './AgentsHead';
import AgentsRow from './AgentsRow';

class Agents extends React.Component {
    render() {
        const test_agents = [{agent_id: "7e6bad57159fc3320ce380d5b35f4a1282780db08262f86a2b0777ba09379caf",agent_polled_target: "cargill-K501UX",agent_program: "pattoo_agent_os_autonomousd",ts_created: "2020-07-25 16:26:56"},
                                {agent_id: "a300087584e8bb14393414cedb781ad3710e4d8433d8c4b4243dbdd64ca44c7a",agent_polled_target: "cargill-K501UX",agent_program: "pattoo_agent_linux_autonomousd",ts_created: "2020-07-30 19:08:05"}]
        const agent_rows = test_agents.map((agent)=>
            <AgentsRow key={agent.agent_id} agent={agent}/>
        );
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
        );
    }
}

export default Agents;