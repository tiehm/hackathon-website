import React from 'react';
import { Caret } from '../Caret';
import './Info.css'
import { Greeting } from './Greeting';
import { ShortInfo } from './ShortInfo';

type Props = {
    scrollTo: (selector: string) => void
}

export class Info extends React.Component<Props, {}> {

    render () {
        return <div className="h-screen flex flex-col" id="info-page">

            <div className="pt-8 px-6 bg-red-3 flex-grow mt-20 lg:mt-16 xl:mt-20 md:pt-16">

                <div className="inner tabletL:w-4/5 m-auto flex flex-col">

                    <Greeting />

                    <ShortInfo />

                </div>

                <Caret className="caret-left" onClick={() => this.props.scrollTo('#about-page')} />

            </div>

        </div>
    }

}
