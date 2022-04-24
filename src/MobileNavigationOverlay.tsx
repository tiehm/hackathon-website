import React from 'react';
import { ReactComponent as CrossIcon } from './img/cross.svg';

type Props = {
  close: () => void;
};

export class MobileNavigationOverlay extends React.Component<Props, {}> {

    render () {
        return <div id="nav-modal"
                    className={`fixed w-full h-full top-0 left-0 bg-white z-50`}>

            {/*<CrossIcon className="absolute top-8 right-8 cursor-pointer" onClick={this.props.close} />*/}


            <div className="h-full flex flex-col justify-center align-middle items-center gap-6 text-blue-12 text-head-l">
                <a href="/" className="border-b-4 border-b-blue-11 transition-all">Home</a>
                <a href="/" className="border-b-2 border-transparent hover:text-blue-11 hover:border-blue-11 hover:border-b-2 transition-all">Event</a>
                <a href="/" className="border-b-2 border-transparent hover:text-blue-11 hover:border-blue-11 hover:border-b-2 transition-all">Team</a>
                <a href="/" className="border-b-2 border-transparent text-blue-11  hover:border-blue-11 hover:border-b-2 transition-all">Mitmachen</a>
            </div>

        </div>
    }

}
