import React from 'react';

import DatapointHead from './DatapointHead';
import DatapointRow from './DatapointRow';

class Datapoint extends React.Component {
    render() {
        const datapoints = this.props.datapoints;
        const dataRows = datapoints.map((datapoint) =>
            <DatapointRow key={datapoint.datapoint_name} datapoint={datapoint}/>
        );
        return (
            <table className="w-auto bg-white overflow-x-scroll">
                <DatapointHead/>
                {dataRows}
            </table>
        );
    }
}

export default Datapoint;