import React from 'react';

import { Link } from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: '',
            menu: 'text-sm mt-6 hidden md:block'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        if (this.state.menu === 'text-sm mt-6 hidden md:block') {
            this.setState({
                menu: 'text-sm mt-6 md:block'
            });
        } else {
            this.setState({
                menu: 'text-sm mt-6 hidden md:block'
            });
        }
        
    }

    render() {
        const notCurrent = "block px-4 flex justify-start border-r-4 border-white"
        const current = "block px-4 flex justify-start border-r-4 border-gray-700"

        return (
            <div className="mt-4 md:col-span-1 md:flex md:justify-end">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                            <Link className="hover:text-gray-700 tracking-widest" to="/admin">
                                Pattoo Portal
                            </Link>
                        </h1>
                        <div className="px-4 cursor-pointer md:hidden" onClick={this.handleClick}>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </div>
                    </div>
                    <ul className={this.state.menu} id="menu">
                        <li className="text-gray-700 font-bold py-1">
                            <Link className={(this.props.current==="home")? current : notCurrent} to="/admin">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="home w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                <span className="pt-1 pl-3">Home</span>
                            </Link>
                        </li>
                        <li className="text-gray-700 font-bold py-1">
                            <Link className={(this.props.current==="users")? current : notCurrent} to="/admin/users">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="user-group w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="pt-1 pl-3">Users</span>
                            </Link>
                        </li>
                        <li className="text-gray-700 font-bold py-1">
                            <Link className={(this.props.current==="agents")? current : notCurrent} to="/admin/agents">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="presentation-chart-bar w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                                <span className="pt-1 pl-3">Agents</span>
                            </Link>
                        </li>
                        <li className="text-gray-700 font-bold py-1">
                            <Link className={(this.props.current==="purge")? current : notCurrent} to="/admin/purge">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="trash w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                <span className="pt-1 pl-3">Purge Data</span>
                            </Link>
                        </li>
                        <li className="text-gray-700 font-bold py-1">
                            <Link className="block px-4 flex justify-start border-r-4 border-white" to="/admin">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="logout w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                <span className="pt-1 pl-3">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;