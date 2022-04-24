import React from 'react';
import { CustomLink } from './CustomLink';

type Props = {
  close: () => void;
};

export class MobileNavigationOverlay extends React.Component<Props, {}> {

    constructor (props: Props) {
        super(props);

        this.leaveModal = this.leaveModal.bind(this);
    }

    leaveModal()  {
        this.props.close();
    }

    render () {
        return <div id="nav-modal"
                    className={`fixed w-full h-full top-0 left-0 bg-white z-50`}>

            <div className="h-full flex flex-col justify-center align-middle items-center gap-6 text-blue-12 text-head-l">
                <CustomLink to="/" className="border-b-2 border-transparent hover:text-blue-11 hover:border-blue-11 hover:border-b-2 transition-all" onClick={this.leaveModal}>Home</CustomLink>
                <CustomLink to="/event" className="border-b-2 border-transparent hover:text-blue-11 hover:border-blue-11 hover:border-b-2 transition-all" onClick={this.leaveModal}>Event</CustomLink>
                <CustomLink to="/team" className="border-b-2 border-transparent hover:text-blue-11 hover:border-blue-11 hover:border-b-2 transition-all" onClick={this.leaveModal}>Team</CustomLink>
                <CustomLink to="/join" className="border-b-2 border-transparent text-blue-11  hover:border-blue-11 hover:border-b-2 transition-all" onClick={this.leaveModal}>Mitmachen</CustomLink>
            </div>

        </div>
    }

}
