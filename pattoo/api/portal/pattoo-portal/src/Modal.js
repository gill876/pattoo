import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.modalClick(event);
    }

    render() {
        return (
                <>
                    {/*Start*/}
                    <div 
                        /*id="close-out"*/
                        style={this.props.mStyle.vIew}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        /*onClick={this.handleClick}*/
                        >
                        <div className="relative w-auto my-6 mx-auto max-w-full md:max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="px-4 text-3xl font-semibold">
                                        {this.props.mElements.title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    >
                                        <span
                                            id="close-icon"
                                            onClick={this.handleClick}
                                            className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto overflow-auto">
                                    {this.props.mElements.content}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        id="close-button"
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={this.handleClick}
                                    >
                                        Close
                                    </button>
                                    <button
                                        id="save-button"
                                        className="hidden bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={this.handleClick}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={this.props.mStyle.bLur} className="opacity-25 fixed inset-0 z-40 bg-black"></div>   
                    {/*End*/}
                </>
        );
    }
}

export default Modal;