import React from 'react';

class DatapointRow extends React.Component {
    constructor(props){
        super (props);
        this.state = {
          enabled: this.props.datapoint.enabled
        }
    
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        let self = this;
        const target = event.target;

        if (target.name === 'toggle'){
            const datapoint_path = '/api/datapoints'
            const datapoint_options = {
                method: 'GET'
            }

            const idxDatapoint = self.props.datapoint.idx_datapoint;
            const idxAgent = self.props.datapoint.idx_agent
            const eNabled = self.state.enabled

            const enable_uri = `${datapoint_path}?idx_agent=${idxAgent}&idx_datapoint=${idxDatapoint}&enabled=${eNabled}`

            fetch(enable_uri, datapoint_options).then(function (response){
                return response.json();
            }).then(function (jsonResponse){
                if (jsonResponse.data.message === 'Changed'){
                    self.setState({
                        enabled: (self.state.enabled === 0)? 1: 0
                    });
                    let alrt = (self.state.enabled === 1)? "on": "off";
                    alert(`Datapoint turned ${alrt}`);
                    //self.props.updateRow(event);
                } else {
                    event.preventDefault();
                }
            }).catch(function (error){
                console.log(error);
            })
        }
    };

    render() {
        const datapoint_id = this.props.datapoint.idx_datapoint;
        const datapoint_name = this.props.datapoint.translation;
        //Enabled
        const ts_created = this.props.datapoint.ts_created;
        const polling_interval = this.props.datapoint.polling_interval;
        return (
            <tbody className="text-gray-700">
                <tr>
                    <td className="text-left py-1 px-2">{datapoint_id}</td>
                    <td className="text-left py-1 px-2">{datapoint_name}</td>
                    <td className="text-left py-3 px-4">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="toggle"
                                    id="toggle"
                                    defaultChecked={this.state.enabled}
                                    onChange={this.handleChange}
                                    >
                                </input>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </td>
                    <td className="text-left py-1 px-2">{ts_created}</td>
                    <td className="text-left py-1 px-2">{polling_interval}</td>
                </tr>
            </tbody>
        );
    }
}

export default DatapointRow;