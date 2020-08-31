import React from 'react';

import Modal from './Modal';
import Datapoint from './Datapoint';

class AgentsRow extends React.Component {
    constructor(props){
      super (props);
      this.state = {
        enabled: this.props.agent.enabled,
        deleteButton: 'cursor-pointer',
        deleteRow: '',
        deleteIconColor: 'red',
        modalView: {display: "none"},
        modalBlur: {display: "none"},
        dataPoints: []
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    };
  
    handleChange(event) {
        let self = this;
        const target = event.target;
        const agentID = target.dataset.value;
        if (target.name === 'toggle'){
            const agent_uri = '/api/agent'
            const agent_options = {
                method: 'GET'
            }

            const enable_uri = `${agent_uri}?enable=${this.state.enabled}&agent=${agentID}`
            fetch(enable_uri, agent_options).then(function (response){
                return response.json();
            }).then(function (jsonResponse){
                if (jsonResponse.data.message === 'Changed'){
                    self.setState({
                      enabled: (self.state.enabled === 0)? 1: 0
                    });
                    let alrt = (self.state.enabled === 1)? "on": "off";
                    alert(`Agent turned ${alrt}`);
                    self.props.updateRow(event);
                  } else {
                    event.preventDefault();
                  }
            }).catch(function (error){
                console.log(error);
            })
        }
    };

    handleClick(event) {
        const target = event.target;
        const targetID = target.id;
        if (target.className === 'cursor-pointer') {
            const confirm = prompt("Enter \"OK\" to permanently delete user", "OK");
            (confirm === "OK")? 
            this.setState({
                deleteButton: 'cursor-pointer noclick-btn',
                deleteRow: 'line-through noclick-btn',
                enabled: false,
                deleteIconColor: 'currentColor'
            }) : alert("Operation cancelled")
        }

        if (targetID === "modal-button") {
            //alert(target.dataset.value)//Gets data inside td
            if (JSON.stringify(this.state.modalView) === JSON.stringify({display: "none"})) {
                this.setState({
                    modalView: {},
                    modalBlur: {}
                });
            }
        } else if (targetID === "close-button" || targetID === "close-icon" || targetID === "close-out") {
            alert("閉める")
            if (JSON.stringify(this.state.modalView) === JSON.stringify({})) {
                this.setState({
                    modalView: {display: "none"},
                    modalBlur: {display: "none"}
                });
            }
        } else if (targetID === "save-button") {
            alert("Changes saved");
            if (JSON.stringify(this.state.modalView) === JSON.stringify({})) {
                this.setState({
                    modalView: {display: "none"},
                    modalBlur: {display: "none"}
                });
            }
        }
    }

    componentDidMount(){
        let self = this;
        const modal_path = '/api/modal'
        const modal_options = {
            method: 'GET'
        }

        const get_modal_uri = `${modal_path}?idx_agent=${this.props.agent.idx_agent}`
        fetch(get_modal_uri, modal_options).then(function (response){
            return response.json();
        }).then(function (jsonResponse){
            if (jsonResponse.data.message === 'Query ran'){
                self.setState({
                    dataPoints: jsonResponse.data.datapoints
                })
            }
        }).catch(function (error){
            console.log(error);
        })
    }
  
    render() {
        const idx_agent = this.props.agent.idx_agent;
        const agent_id = this.props.agent.agent_id;
        const agent_polled_target = this.props.agent.agent_polled_target;
        const agent_program = this.props.agent.agent_program;
        const ts_created = this.props.agent.ts_created;

        //Use Agent ID to retrieve the datapoints for that agent
        const modalStyle = {bLur: this.state.modalBlur, vIew: this.state.modalView};
        //Fetch server for actual data
        const _datapoints = this.state.dataPoints;

        const datapoints = <Datapoint datapoints={_datapoints}/>
        const title = "Datapoints for " + agent_id.substring(0, 10) + "...";
        const modalElements = {
            title: title,
            content: datapoints
        };
      return (
        <tbody className="text-gray-700">
          <tr className={this.state.deleteRow}>
            <td className="text-left py-3 px-4 relative hover-trigger"
                >
                <div class="absolute bg-white border border-grey-100 p-1 z-10 hover-target">
                    {agent_id}
                </div>
                {agent_id.substring(0, 10) + "..."}
            </td>
            <td 
                id="modal-button"
                className="text-left py-3 px-4 text-black hover:text-blue-500 cursor-pointer"
                onClick={this.handleClick}
                data-value={idx_agent}>
                {agent_polled_target}
            </td>
            <td className="text-left py-3 px-4">{agent_program}</td>
            <td className="text-left py-3 px-4">
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <label className="switch">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            data-value={idx_agent}
                            defaultChecked={this.state.enabled}
                            onChange={this.handleChange}
                            >
                        </input>
                        <span className="slider round"></span>
                    </label>
                </div>
            </td>
            <td className="text-left py-3 px-4">{ts_created}</td>
            <td className="text-center py-3 px-4">
                <div className={this.state.deleteButton}
                    onClick={this.handleClick}>
                    <svg fill="none" viewBox="0 0 24 24" stroke={this.state.deleteIconColor} className="x-circle w-6 h-6 noclick-btn"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
            </td>
          </tr>
          <tr>
            <td>
                <Modal mElements={modalElements} mStyle={modalStyle} modalClick={this.handleClick}/>
            </td>
          </tr>
        </tbody>
      );
    };
};

export default AgentsRow;