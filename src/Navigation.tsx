import React from 'react';
import logo from './img/logo-colored.svg';

type Props = {
    toggleNav: () => void;
};

type State = {
    isOpen: boolean;
};

export class Navigation extends React.Component<Props, State> {

    constructor (props: Props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
    }

    state = {
        isOpen: false
    }

    toggleNav() {
        document.getElementById('nav-button')?.classList.toggle('-menu-open');
        this.props.toggleNav();
    }

    render () {
        return <nav className="bg-blue-1 text-text-l">
            <div className="container flex flex-wrap justify-between items-center mx-auto p-1 tabletL:w-4/5">
                <div className="flex items-center p-4">
                    <img src={logo} alt="" className="w-16 tabletL:w-24 ml-2"/>
                </div>
                <div className="inline-flex items-center justify-center p-2 ml-3 tabletL:hidden">
                    {/* Following is adapted from https://codepen.io/staffanmowitz/pen/KoKgmo */}
                    <div id="nav-button" className="button cursor-pointer p-1 z-50" onClick={this.toggleNav}>
                        <svg width="30px"
                             height="40px"
                             className="flex flex-col justify-center items-center align-middle"
                             viewBox="0 0 30 40"
                             version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <line x1="0"
                                      y1="10"
                                      x2="40"
                                      y2="10"
                                      stroke-width="1"/>
                                <line x1="0"
                                      y1="20"
                                      x2="40"
                                      y2="20"
                                      stroke-width="1"/>
                                <line x1="0"
                                      y1="30"
                                      x2="40"
                                      y2="30"
                                      stroke-width="1"/>
                            </g>

                            <g>
                                <line x1="0" y1="20" x2="30" y2="20" stroke-width="1" />
                                <line x1="0" y1="20" x2="30" y2="20" stroke-width="1" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="hidden w-full ml-4 my-4 tabletL:flex tabletL:flex-row tabletL:gap-8 tabletL:w-auto tabletL:justify-center 2xl:text-head-s"
                     id="mobile-menu">
                    <div className="font-medium border-b-2 border-blue-11 text-blue-12 cursor-pointer w-fit">
                        Home
                    </div>
                    <div className="text-gray-700 cursor-pointer hover:text-blue-11 hover:border-blue-11 hover:border-b-2 transition-all">
                        Event
                    </div>
                    <div className="text-gray-700 cursor-pointer hover:text-blue-11 hover:border-blue-11 hover:border-b-2 transition-all">
                        Team
                    </div>
                    <div className="font-medium text-blue-11 cursor-pointer hover:text-blue-12 hover:border-blue-11 hover:border-b-2 transition-all">
                        Mitmachen
                    </div>
                </div>
            </div>
        </nav>
    }

}
