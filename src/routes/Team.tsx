import React from 'react';
import { Footer } from '../components/footer/Footer';

export class Team extends React.Component {

    render () {
        return (<div className="overflow-x-hidden">
            <div className="h-screen flex bg-red-3 w-full justify-center items-center mb-10 select-none font-medium text-blue-12 text-5xl sm:text-7xl md:text-8xl lg:text-10xl">
                Coming soon!
            </div>

            <Footer backgroundColor={'blue'}/>

        </div>);
    }
}
