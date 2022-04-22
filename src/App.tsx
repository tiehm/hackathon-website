import React  from 'react';
import invertedBwLogo from './img/logo-bw-inverted.svg';
import downCaret from './img/down-caret.svg';
import heart from './img/heart.png';
import { ReactComponent as PersonAddIcon } from './img/person-add.svg';
import { ReactComponent as ExploreIcon } from './img/explore.svg';
import { ReactComponent as SupportIcon } from './img/support.svg';
import sun from './img/sun.svg';
import user from './img/user.svg';
import recodeLogo from './img/partners/org_recode_text.png'
import recodeBaseLogo from './img/partners/org_recode_logo.png'
import orgFrankfurtLogo from './img/partners/org-fra.png'
import orgAachen from './img/partners/org_aachen.svg'
import './App.css';
import { MobileNavigationOverlay } from './MobileNavigationOverlay';
import { Navigation } from './Navigation';

type State = {
  isMenuOpen: boolean;
};

export class App extends React.Component<{}, State> {

    constructor (props: {}){
        super(props);

        this.state = {
            isMenuOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);

    }

    toggleMenu () {
        document.body.classList.toggle("overflow-y-hidden");
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });
    }

    scrollTo (selector: string): undefined {
        // https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery

        const nextElement = document.querySelector(selector) as HTMLElement;
        if (!nextElement) {
            // no element found, developer at fault
            return;
        }

        window.scroll({
            behavior: 'smooth', left: 0, top: nextElement.offsetTop
        });
    }


    render() {
        return <div className={`App overflow-x-hidden`}>
            {
                this.state.isMenuOpen &&
                <MobileNavigationOverlay  close={this.toggleMenu}/>
            }
            <div className="h-screen flex flex-col" id="page-one">
                <Navigation toggleNav={this.toggleMenu}/>

                <div className="pt-8 px-6 bg-red-3 flex-grow mb-12">
                    <div className="inner container m-auto flex flex-col">
                        <div className="feature text-left relative mb-10">
                            <div className="font-medium text-[65px] text-left">
                                Legal Tech
                            </div>
                            <div className="leading-[90px] font-pen font-medium text-[120px] text-red-10 text-center -ml-12">
                                loves
                            </div>
                            <div className="text-[120px] font-medium text-blue-12 leading-[40px] text-right">
                                you!
                            </div>
                            <img src={heart}
                                 alt=""
                                 className="hidden w-12 h-12 absolute top-0 right-20"/>
                            <img src={heart}
                                 alt=""
                                 className="hidden w-8 h-8 rotate-[-17deg] absolute top-8 right-32"/>
                            <img src={heart}
                                 alt=""
                                 className="hidden w-4 h-4 rotate-[5deg] absolute top-16 right-16"/>
                        </div>
                        <div className="details text-left font-semi-bold text-text-l mt-16">
                            02.01.23 - 08.01.23. Deutschlands groesster Legal Tech Hackathon von und fuer Studierende. Offen und inklusiv. Non-Profit. Trotzdem € 2.500,- Preisgeld.Und das Beste: Nur dein Interesse genuegt, wir bringen dir alles bei!
                        </div>
                        <div className="w-full justify-end flex my-4">
                            <div className="bg-blue-12 text-blue-1 rounded text-center px-8 py-5 inline-block cursor-pointer">
                                Mehr erfahren!
                            </div>
                        </div>
                    </div>
                    <img src={downCaret}
                         alt=""
                         className="absolute bottom-7 left-10 cursor-pointer w-12"
                         onClick={() => this.scrollTo('#page-two')}/>
                </div>
            </div>
            <div id="page-two" className="h-screen relative flex">
                <div className="items-center flex h-full absolute right-[-0.5rem] mt-auto">
                    <div className="h-4/5 bg-red-10 w-16 rounded"></div>
                </div>
                <div className="absolute top-12 right-0 rounded-l bg-blue-12 text-blue-1 text-head-l px-6 py-3">
                    About LLT
                </div>
                <div className="h-full block w-full">
                    <div className="h-full m-auto flex flex-col items-center justify-center  gap-4 text-text-m font-medium">
                        <div className="w-11/12 -mr-10 items-center justify-center flex flex-row p-6 gap-2 bg-blue-4 border-2 border-blue-12 rounded relative z-10">
                            <PersonAddIcon className="w-32 h-auto"/>
                            <div className="text-text-m font-regular text-blue-12 text-left break-words">
                                Eine Kooperation aller studentischen Legal Tech
                                Initiativen Deutschlands.
                            </div>
                        </div>
                        <div className="w-11/12 -mr-10  items-center justify-center flex flex-row p-6 gap-2 bg-blue-1 border-4 border-blue-4 rounded relative z-10 ">
                            <div className="text-text-m font-regular text-blue-12 text-left break-words">
                                Ein standortuebergreifender Zusammenschluss von
                                Universitaeten und Non-Profits.
                            </div>
                            <ExploreIcon className="w-32 h-auto"/>
                        </div>
                        <div className="w-11/12 -mr-10  items-center justify-center flex flex-row p-6
                         gap-2 bg-blue-4 border-2 border-blue-12 rounded relative z-10">
                            <SupportIcon className="w-56 h-auto"/>
                            <div className="text-text-m font-regular text-blue-12 text-left break-words">
                                Betreuung und Unterricht durch fuehrende
                                Expert:innen und Dozierende aus den Bereichen
                                Start-Up, Rechtswissenschaften und Technik.
                            </div>
                        </div>
                    </div>
                </div>
                <img src={downCaret}
                     alt=""
                     className="absolute bottom-7 left-10 cursor-pointer w-12"
                     onClick={() => this.scrollTo('#page-three')}/>
            </div>
            <div id="page-three" className="relative flex z-10">
                <div className="items-center flex h-full absolute left-[-0.5rem] mt-auto">
                    <div className="h-4/5 bg-red-3 w-12 rounded"></div>
                </div>
                <div className="text-blue-12 text-head-l absolute z-10 top-16 left-6">
                    Partners
                </div>
                <div className="h-full flex justify-center items-center w-4/5 ml-auto mr-2 mt-32 z-10 flex-grow">
                    <div className="grid grid-cols-3 h-full gap-2 w-4/5 ml-auto mr-4 justify-center align-middle items-center">

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeLogo} className="h-auto w-auto" alt="" />
                        </div>
                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeBaseLogo} className="h-auto w-auto" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgAachen} className="h-auto w-auto" alt=""/>
                        </div>
                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFrankfurtLogo} className="h-auto w-auto" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeLogo} className="h-auto w-auto" alt="" />
                        </div>
                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeBaseLogo} className="h-auto w-auto" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgAachen} className="h-auto w-auto" alt=""/>
                        </div>
                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFrankfurtLogo} className="h-auto w-auto" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeLogo} className="h-auto w-auto" alt="" />
                        </div>
                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeBaseLogo} className="h-auto w-auto" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgAachen} className="h-auto w-auto" alt=""/>
                        </div>
                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFrankfurtLogo} className="h-auto w-auto" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeLogo} className="h-auto w-auto" alt="" />
                        </div>
                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeBaseLogo} className="h-auto w-auto" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgAachen} className="h-auto w-auto" alt=""/>
                        </div>
                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFrankfurtLogo} className="h-auto w-auto" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeLogo} className="h-auto w-auto" alt="" />
                        </div>
                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeBaseLogo} className="h-auto w-auto" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgAachen} className="h-auto w-auto" alt=""/>
                        </div>
                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFrankfurtLogo} className="h-auto w-auto" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeLogo} className="h-auto w-auto" alt="" />
                        </div>
                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeBaseLogo} className="h-auto w-auto" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgAachen} className="h-auto w-auto" alt=""/>
                        </div>
                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFrankfurtLogo} className="h-auto w-auto" alt="" />
                        </div>

                    </div>
                </div>
                <img src={downCaret}
                     alt=""
                     className="hidden absolute bottom-7 left-10 cursor-pointer w-12"
                     onClick={() => this.scrollTo('#page-four')}/>
            </div>
            <div id="page-four" className="h-screen relative flex flex-col">
                <div className="h-full absolute -left-[0.5rem]">
                    <div className="h-1/4 bg-red-3 w-12 rounded"></div>
                </div>
                <div className="flex justify-center align-bottom items-center w-4/5 ml-auto mr-2 pt-1">
                    <div className="grid grid-cols-3 grid-rows-7 h-4/5 gap-2 w-full">
                        <img src={sun} alt="" className="w-20 h-20"/>
                        <img src={sun} alt="" className="w-20 h-20"/>
                        <img src={sun} alt="" className="w-20 h-20"/>
                        <img src={sun} alt="" className="w-20 h-20"/>
                        <img src={sun} alt="" className="w-20 h-20"/>
                        <img src={sun} alt="" className="w-20 h-20"/>
                    </div>
                </div>
                <div className="h-3/5 w-full bg-blue-12 flex flex-col absolute bottom-0">
                    <div className="container mx-auto flex flex-row items-center text-center justify-center py-4 gap-12 ">
                        <img src={user}
                             alt=""
                             className="w-32 h-32"/>
                        <img src={invertedBwLogo} alt="" className="w-32 h-32"/>
                    </div>
                    <div className="w-4/5 mx-auto flex-grow">
                        <div className="text-left">
                            <div className="text-head-m font-medium text-blue-1 mb-4">
                                Contact
                            </div>
                            <div className="font-semi-bold text-blue-1 text-text-l mb-2">
                                Name Ansprechpartner:in
                            </div>
                            <div className="font-semi-bold text-blue-1 text-text-l">
                                hello@legallovestech.de
                            </div>
                        </div>
                    </div>
                    <div className="pb-3 text-center flex flex-col gap-3 justify-center font-semi-bold text-blue-1">
                        <a href="/"
                           className="text-text-s">Datenschutzerklaerung</a>
                        <a href="/" className="text-text-s">Impressum</a>
                        <a href="/" className="text-text-s">Interner Bereich</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App;
