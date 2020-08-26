import React from 'react';

import Navigation from './Navigation';
import PurgeForm from './PurgeForm';

class PurgeData extends React.Component {
    render() {
        return (
            <div className="flex flex-col md:grid md:grid-cols-7">
                <Navigation current={"purge"}/>
                <div className="md:col-span-6">
                    <div className="text-lg md:text-3xl text-center font-bold tracking-wider my-3 py-2">Purge Data</div>
                    <div className="md:px-10 flex justify-center text-center py-8 mx-5 bg-white shadow rounded border-b border-gray-200">
                        <div className="w-auto bg-white-300">
                            <PurgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PurgeData;