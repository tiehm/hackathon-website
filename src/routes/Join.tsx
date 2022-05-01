import React from 'react';
import { Footer } from '../components/footer/Footer';

export class Join extends React.Component {

    render () {
        return (<div className="overflow-x-hidden">
            <div className="h-screen flex bg-red-3 w-full justify-center items-center mb-10">
                <div className="select-none text-center text-blue-12">
                    <div className="font-medium mb-4 lxs:mb-0 text-5xl sm:text-7xl md:text-8xl lg:text-10xl">
                        Coming soon!
                    </div>
                    <div className="text-text-caption font-semi-bold uppercase lxs:float-right ">
                        (ab 01.10.2022)
                    </div>
                </div>
            </div>

            <Footer backgroundColor={'blue'}/>

        </div>);
    }
}
