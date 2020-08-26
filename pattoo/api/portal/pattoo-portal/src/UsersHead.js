import React from 'react';

class UsersHead extends React.Component {
    render() {
      return (
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">User ID</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Last Name</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Enabled</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">User Type</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Delete User</th>
          </tr>
        </thead>
      );
    };
};

export default UsersHead;