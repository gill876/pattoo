import React from 'react';

class AgentsHead extends React.Component {
    render() {
      return (
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Agent ID</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Polled Target</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Agent Program</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Enabled</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Date Created</th>
            <th className="text-left pb-3 px-4 uppercase font-semibold text-sm">Remove Agent</th>
          </tr>
        </thead>
      );
    };
};

export default AgentsHead;