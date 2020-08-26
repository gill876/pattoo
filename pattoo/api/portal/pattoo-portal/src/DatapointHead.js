import React from 'react';

class DatapointHead extends React.Component {
    render() {
        return (
            <thead className="bg-gray-600 text-white">
                <tr>
                    <th className="text-left py-1 px-2 uppercase font-semibold text-sm">Datapoint Name</th>
                    <th className="text-left py-1 px-2 uppercase font-semibold text-sm">Polling Interval</th>
                    <th className="text-left py-1 px-2 uppercase font-semibold text-sm">Enabled</th>
                    <th className="text-left py-1 px-2 uppercase font-semibold text-sm">Created</th>
                    <th className="text-left py-1 px-2 uppercase font-semibold text-sm">Modified</th>
                </tr>
            </thead>
        );
    };
};

export default DatapointHead;