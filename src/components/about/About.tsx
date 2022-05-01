import React from 'react';
import { ReactComponent as ExploreIcon } from '../../img/icons/explore.svg';
import { ReactComponent as PersonAddIcon } from '../../img/icons/person-add.svg';
import { ReactComponent as SupportIcon } from '../../img/icons/support.svg';
import './About.css'
import { Caret } from '../Caret';

type Props = {
    scrollTo: (selector: string) => void
}

// About is the entrypoint for the about page (path: /about)
// TODO: change design to new design
// TODO: refactor after design change
export class About extends React.Component<Props, {}> {

    render () {
        return <div id="about-page" className="h-screen relative flex">
            <div className="items-center flex h-full absolute -right-2 mt-auto">
                {/* right, colored sidebar */}
                <div className="h-4/5 bg-red-10 w-16 rounded"></div>
            </div>
            <div className="absolute top-12 right-0 rounded-l bg-blue-12 text-blue-1 text-head-l px-6 py-3 md:px-12 md:py-6 lg:right-8 lg:rounded lg:px-20 lg:py-10 2xl:right-[10%]">
                About LLT
            </div>
            <div className="h-full block w-full">
                <div className="h-full m-auto flex flex-col items-center justify-center gap-10 text-text-m font-medium md:gap-6 lg:w-3/5 lg:text-head-m">
                    <div className="w-11/12 -mr-10 items-center justify-center grid grid-cols-12 p-6 gap-7 bg-blue-4 border-2 border-blue-12 rounded relative z-10 iPhoneXS:p-3 md:p-3 lg:pd-6 lg:w-full lg:mr-0">
                        <PersonAddIcon strokeWidth="2px" className="w-12 md:w-24 h-auto col-span-2 ml-auto"/>
                        <div className="font-regular text-blue-12 text-left break-words col-span-10">
                            Eine Kooperation aller studentischen Legal Tech
                            Initiativen Deutschlands.
                        </div>
                    </div>
                    <div className="w-11/12 -mr-10 lg:w-full lg:mr-0 items-center justify-center grid grid-cols-12 p-6 md:p-3 lg:pd-6 iPhoneXS:p-3 gap-2 bg-blue-1 border-4 border-blue-4 rounded relative z-10 ">
                        <div className=" font-regular text-blue-12 text-left col-span-10">
                            Ein standortübergreifender Zusammenschluss von
                            Universitäten und Non-Profits.
                        </div>
                        <ExploreIcon strokeWidth="2px" className="w-12 md:w-24 h-auto mr-auto col-span-2"/>
                    </div>
                    <div className="w-11/12 -mr-10 lg:w-full lg:mr-0 items-center justify-center grid grid-cols-12 p-6 md:p-3 lg:pd-6 iPhoneXS:p-3
                         gap-7 bg-blue-4 border-2 border-blue-12 rounded relative z-10">
                        <SupportIcon strokeWidth="2px" className="w-12 md:w-24 h-auto ml-auto col-span-2"/>
                        <div className=" font-regular text-blue-12 text-left break-words col-span-10">
                            Betreuung und Unterricht durch führende
                            Expert:innen und Dozierende aus den Bereichen
                            Start-Up, Rechtswissenschaften und Technik.
                        </div>
                    </div>
                </div>
            </div>
            <Caret className="caret-right" onClick={() => this.props.scrollTo('#partners-page')} />
        </div>
    }

}
