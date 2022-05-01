import classNames from 'classnames';
import React from 'react';
import invertedBlackWhiteLogo from '../../img/lltLogos/logo-bw-inverted.svg';
import blackWhiteLogo from '../../img/lltLogos/logo-bw.svg'
import { ContactDetails } from './ContactDetails';

import './Footer.css'

type Props = {
    backgroundColor: 'red'|'blue'
}

export class Footer extends React.Component<Props, {}> {

    // tailwindBackgroundClass gets the tailwind class to apply for the
    // footer background color based on the props value
    get tailwindBackgroundClass(): string {
        switch (this.props.backgroundColor) {
            case 'blue':
                return 'bg-blue-12'
            case 'red':
                return 'bg-red-3'
            default:
                return 'bg-blue-12'
        }
    }

    get tailwindTextColorClass(): string {
        switch (this.props.backgroundColor) {
            case 'red':
                return 'text-blue-12'
            case 'blue':
                return 'text-blue-1'
            default:
                return 'text-blue-1'
        }
    }

    render () {
        return <div className="relative flex flex-col mt-16">
            <div className={classNames("w-full", this.tailwindBackgroundClass, this.tailwindTextColorClass)}>
                <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:align-middle xl:items-center xl:py-10">
                    <div className="container mx-auto flex flex-row items-center text-center justify-center py-4 gap-12 md:justify-between md:w-4/5 xl:w-1/2 xl:flex-row-reverse">
                        <div className="flex flex-row justify-center align-middle items-center gap-4">
                            <div className="flex justify-center align-middle items-center">
                                <div id="contact-person" className="w-32 h-32 rounded-full"></div>
                            </div>
                            <ContactDetails className="hidden w-4/5 text-left lg:flex lg:flex-col" />
                        </div>
                        <div>
                            { this.props.backgroundColor === 'blue' && <img src={invertedBlackWhiteLogo} alt="" className="w-32 h-32"/> }
                            { this.props.backgroundColor === 'red' && <img src={blackWhiteLogo} alt="" className="w-32 h-32"/>}
                        </div>
                    </div>
                    <ContactDetails className="w-4/5 text-left mx-auto flex-grow lg:hidden" />
                </div>
                <div className="pt-14 pb-6 text-center flex flex-col gap-4 justify-center font-semi-bold lg:basis-full lg:flex-row lg:gap-14">
                    <a href="/src/routes"
                       className="text-text-s">Datenschutzerklärung</a>
                    <a href="/src/routes" className="text-text-s">Impressum</a>
                    <a href="/src/routes" className="text-text-s">Interner Bereich</a>
                </div>
            </div>
        </div>
    }

}
