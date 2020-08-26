import React from 'react';

class DatapointRow extends React.Component {
    constructor(props){
        super (props);
        this.state = {
          enabled: false
        }
    
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        const target = event.target;
        alert(this.state.enabled);
        if (target.name === 'toggle'){
            this.setState({
                enabled: !this.state.enabled
            });
        }
    };

    render() {
        const datapoint_name = this.props.datapoint.datapoint_name;
        const polling_interval = this.props.datapoint.polling_interval;
        const ts_created = this.props.datapoint.ts_created;
        const ts_modified = this.props.datapoint.ts_modified;
        return (
            <tbody className="text-gray-700">
                <tr>
                    <td className="text-left py-1 px-2">{datapoint_name}</td>
                    <td className="text-left py-1 px-2">{polling_interval}</td>
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
                    <td className="text-left py-1 px-2">{ts_modified}</td>
                </tr>
            </tbody>
        );
    }
}

export default DatapointRow;