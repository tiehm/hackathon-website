import classNames from 'classnames';
import React from 'react';
import invertedBlackWhiteLogo from '../../img/lltLogos/logo-bw-inverted.svg';
import blackWhiteLogo from '../../img/lltLogos/logo-bw.svg';
import { ContactDetails } from './ContactDetails';

import './Footer.css';

type Props = {
    backgroundColor: 'red' | 'blue'
}

export class Footer extends React.Component<Props, {}> {

    // tailwindBackgroundClass gets the tailwind class to apply for the
    // footer background color based on the props value
    get tailwindBackgroundClass (): string {
        switch (this.props.backgroundColor) {
            case 'blue':
                return 'bg-blue-12';
            case 'red':
                return 'bg-red-3';
            default:
                return 'bg-blue-12';
        }
    }

    get tailwindTextColorClass (): string {
        switch (this.props.backgroundColor) {
            case 'red':
                return 'text-blue-12';
            case 'blue':
                return 'text-blue-1';
            default:
                return 'text-blue-1';
        }
    }

    render () {
        return <div className={classNames('w-full mt-16', this.tailwindBackgroundClass, this.tailwindTextColorClass)}>

            {/* complete footer container without the links to imprint,
             internal area etc. */}
            <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:items-center xl:py-10">

                {/* container for the contact person image and the llt
                 logo, on desktop this also holds the contact
                 information */}
                <div className="container mx-auto flex flex-row items-center text-center justify-center py-4 gap-12 md:justify-between md:w-4/5 xl:w-1/2 xl:flex-row-reverse">

                    <div className="flex flex-row justify-center  items-center gap-4">

                        {/* the container for the contact person image
                         is needed as flexbox does weird height align
                         stuff otherwise */}
                        <div className="flex justify-center items-center">

                            {/* #contact-person holds the person who is
                             in charge of support/contacting as a
                             background image */}
                            <div id="contact-person"
                                 className="w-32 h-32 rounded-full"></div>

                        </div>

                        <ContactDetails className="hidden w-4/5 text-left lg:flex lg:flex-col"/>

                    </div>

                    {/* container for the ltt logo, due to flexbox we
                     need this container as the height would be all
                     kinds of funky otherwise */}
                    <div>
                        {/* conditionally render the white or black ltt
                         logo depending on the background color of the
                         footer */}
                        {this.props.backgroundColor === 'blue' &&
                            <img src={invertedBlackWhiteLogo}
                                 alt=""
                                 className="w-32 h-32"/>}
                        {this.props.backgroundColor === 'red' &&
                            <img src={blackWhiteLogo}
                                 alt=""
                                 className="w-32 h-32"/>}
                    </div>
                </div>

                {/* contact details for mobile as the formatting is so
                 different that we need to render the element elsewhere
                 than on desktop */}
                <ContactDetails className="w-4/5 text-left mx-auto flex-grow lg:hidden"/>

            </div>

            <div className="pt-14 pb-6 text-center text-text-s flex flex-col gap-4 justify-center font-semi-bold lg:basis-full lg:flex-row lg:gap-14">
                <a href="/datenschutz">Datenschutzerklärung</a>
                <a href="/impressum">Impressum</a>
                <a href="/#">Interner Bereich</a>
            </div>

        </div>;
    }

}
