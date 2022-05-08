import React from 'react';
import { Footer } from '../components/footer/Footer';
import './Team.css'

export class Team extends React.Component {

    render () {
        return (<div className="overflow-x-hidden">
            <div className="h-screen flex bg-red-3 w-full justify-center items-center mb-10">
                <div className="container p-10 grid grid-cols-1 h-full" >
                    <div className="bg-blue-2 rounded h-3/5">
                        <div id="basti-img" className="w-full h-full">

                        </div>
                        <div className="text-center">
                            <div>
                                Sebastian Nagl
                            </div>
                            <div>
                                Initiator & Junge für Alles
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer backgroundColor={'blue'}/>

        </div>);
    }
}
