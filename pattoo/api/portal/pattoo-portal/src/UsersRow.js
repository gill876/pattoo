import React from 'react';

class UsersRow extends React.Component {
    constructor(props){
      super (props);
      this.state = {
        enabled: false,
        deleteButton: 'cursor-pointer',
        deleteRow: '',
        deleteIconColor: 'red'
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
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

    handleClick(event) {
        const target = event.target;
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
    }
  
    render() {
      const idx_user = this.props.user.idx_user;
      const first_name = this.props.user.first_name;
      const last_name = this.props.user.last_name;
      const username = this.props.user.username;
      const user_type = this.props.user.user_type;
      return (
        <tbody className="text-gray-700">
          <tr className={this.state.deleteRow}>
            <td className="text-left py-3 px-4">{idx_user}</td>
            <td className="text-left py-3 px-4">{first_name}</td>
            <td className="text-left py-3 px-4">{last_name}</td>
            <td className="text-left py-3 px-4">{username}</td>
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
            <td className="text-left py-3 px-4">{user_type}</td>
            <td className="text-center py-3 px-4">
                <div className={this.state.deleteButton}
                    onClick={this.handleClick}>
                    <svg fill="none" viewBox="0 0 24 24" stroke={this.state.deleteIconColor} className="user-remove w-6 h-6 noclick-btn"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
                </div>
            </td>
          </tr>
        </tbody>
      );
    };
};

export default UsersRow;