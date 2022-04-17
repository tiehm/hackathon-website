import React from 'react';
import logo from './img/logo-colored.svg';
import invertedBwLogo from './img/logo-bw-inverted.svg';
import downCaret from './img/down-caret.svg';
import heart from './img/heart.png';
import { ReactComponent as PersonAddIcon } from './img/person-add.svg';
import { ReactComponent as ExploreIcon } from './img/explore.svg';
import { ReactComponent as SupportIcon } from './img/support.svg';
import sun from './img/sun.svg';
import user from './img/user.svg';
import './App.css';

function App () {
    return (<div className="App overflow-x-hidden">
            <div className="h-screen flex flex-col" id="page-one">
                <nav className="bg-blue-1 text-text-l">
                    <div className="container flex flex-wrap justify-between items-center mx-auto p-1">
                        <div className="flex items-center">
                            <img src={logo} alt="" className="w-16 ml-2"/>
                        </div>
                        <div className="inline-flex items-center p-2 ml-3">
                            <svg
                                onClick={toggleMenu}
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 cursor-pointer p-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>
                        <div className="hidden w-full ml-4 mt-4 flex flex-col gap-2 md:block md:w-auto"
                             id="mobile-menu">
                            <div className="font-medium border-b-2 border-blue-11 text-blue-12 cursor-pointer w-fit">
                                Home
                            </div>
                            <div className="text-gray-700 cursor-not-allowed">
                                Event
                            </div>
                            <div className="text-gray-700 cursor-not-allowed">
                                Team
                            </div>
                            <div className="font-medium text-blue-11 cursor-not-allowed">
                                Mitmachen
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="pt-8 px-6 bg-red-3">
                    <div className="inner container m-auto flex flex-col">
                        <div className="feature text-left relative mb-10">
                            <div className="font-medium text-head-l w-fit">
                                Legal Tech
                            </div>
                            <div className="ml-16 leading-[26px] font-pen font-medium text-[50px] text-red-10">
                                loves
                            </div>
                            <div className="ml-24 text-[50px] font-medium text-blue-12 leading-[30px]">
                                you!
                            </div>
                            <img src={heart}
                                 alt=""
                                 className="w-12 h-12 absolute top-0 right-20"/>
                            <img src={heart}
                                 alt=""
                                 className="w-8 h-8 rotate-[-17deg] absolute top-8 right-32"/>
                            <img src={heart}
                                 alt=""
                                 className="w-4 h-4 rotate-[5deg] absolute top-16 right-16"/>
                        </div>
                        <div className="details text-left font-regular text-head-m">
                            <span className="font-bold">02.01.23 - 08.01.23.</span> <br/>
                            Deutschlands groesster Tech Hackathon von und fuer Studierende. <br/>
                            Offen und inklusiv. <br/>
                            Non-Profit. <br/>
                            Trotzdem € 2.500,- Preisgeld. <br/>
                            Und das Beste: Nur dein Interesse genuegt, wir bringen dir alles bei!
                        </div>
                        <div className="w-full justify-end flex my-4">
                            <div className="bg-blue-12 text-blue-1 rounded text-center px-6 py-3 inline-block cursor-pointer">
                                Mehr erfahren!
                            </div>
                        </div>
                    </div>
                    <img src={downCaret}
                         alt=""
                         className="hidden absolute bottom-4 left-16 cursor-pointer"
                         onClick={() => scrollTo('#page-two')}/>
                </div>
            </div>
            <div id="page-two" className="h-screen relative flex">
                <div className="items-center flex h-full absolute right-[-0.5rem] mt-auto">
                    <div className="h-4/5 bg-red-10 w-16 rounded"></div>
                </div>
                <div className="absolute top-4 right-6 rounded bg-blue-12 text-blue-1 text-head-l px-6 py-3">
                    About LLT
                </div>
                <div className="h-full block w-full">
                    <div className="container h-full m-auto flex flex-col items-center justify-center  gap-4">
                        <div className="w-4/5 items-center justify-center flex flex-row  gap-2 bg-blue-4 p-3 border-2 border-blue-12 rounded relative z-10">
                            <PersonAddIcon className="w-16 h-16 absolute right-1 top-0"/>
                            <div className="text-text-m font-regular text-blue-12 text-left break-words">
                                Eine Kooperation aller studentischen Legal Tech
                                Initiativen Deutschlands.
                            </div>
                        </div>
                        <div className="w-4/5 items-center justify-center flex flex-row  gap-2 bg-blue-1 p-3 border-2 border-blue-4 rounded relative z-10">
                            <div className="text-text-m font-regular text-blue-12 text-right break-words">
                                Ein standortuebergreifender Zusammenschluss von
                                Universitaeten und Non-Profits.
                            </div>
                            <ExploreIcon className="w-16 h-16 absolute left-1 top-0"/>
                        </div>
                        <div className="w-4/5 items-center justify-center flex flex-row  gap-2 bg-blue-4 p-3 border-2 border-blue-12 rounded relative z-10">
                            <SupportIcon className="w-16 h-16 absolute right-1 top-0"/>
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
                     className="hidden absolute bottom-6 right-28 cursor-pointer"
                     onClick={() => scrollTo('#page-three')}/>
            </div>
            <div id="page-three" className="h-screen relative flex">
                <div className="items-center flex h-full absolute left-[-0.5rem] mt-auto">
                    <div className="h-4/5 bg-red-3 w-16 rounded"></div>
                </div>
                <div className="text-blue-12 text-head-l absolute z-10 top-12 left-6">
                    Partners
                </div>
                <div className="h-full flex justify-center align-bottom items-center w-4/5 mx-auto pt-10 z-10">
                    <div className="flex flex-wrap-reverse h-4/5 gap-2 w-full">
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                    </div>
                </div>
                <img src={downCaret}
                     alt=""
                     className="hidden absolute bottom-6 left-28 cursor-pointer"
                     onClick={() => scrollTo('#page-four')}/>
            </div>
            <div id="page-four" className="h-screen relative flex flex-col">
                <div className="flex h-full absolute -left-[0.5rem] -top-24">
                    <div className="h-3/5 bg-red-3 w-16 rounded"></div>
                </div>
                <div className="-mt-12 flex w-4/5 mx-auto z-10">
                    <div className="flex flex-wrap gap-2 w-full">
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                        <img src={sun} alt="" className="w-12 h-12"/>
                    </div>
                </div>
                <div className="h-2/5 w-full bg-blue-12 flex flex-col absolute bottom-0">
                    <div className="container mx-4 m-auto flex flex-row items-center text-center w-full ">
                        <img src={invertedBwLogo} alt="" className="w-20 h-20"/>
                        <div className="flex flex-row gap-4 justify-center  items-center flex-grow">
                            <img src={user}
                                 alt=""
                                 className="hidden w-16 h-16"/>
                            <div className="text-center flex-grow">
                                <div className="text-text-l text-blue-1 mb-4">
                                    Contact
                                </div>
                                <div className="font-medium text-blue-1 text-text-s mb-2">
                                    Name Ansprechpartner:in
                                </div>
                                <div className="font-medium text-blue-1 text-text-s">
                                    hello@legallovestech.de
                                </div>
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
        </div>);
}

// toggle the navigation menu
function toggleMenu () {
    const elem = document.getElementById('mobile-menu');
    if (elem) {
        elem.classList.toggle('hidden');
    }
}

// smooth scrolls to the next given element by its css selector
function scrollTo (selector: string): undefined {
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

export default App;
