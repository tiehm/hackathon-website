import React from 'react';
import logo from './img/logo-colored.svg'
import invertedBwLogo from './img/logo-bw-inverted.svg'
import downCaret from './img/down-caret.svg'
import heart from './img/heart.png'
import personAdd from './img/person-add.svg'
import explore from './img/explore.svg'
import support from './img/support.svg'
import sun from './img/sun.svg'
import user from './img/user.svg'
import './App.css';

function App() {
  return (
    <div className="App overflow-x-hidden">
        <div className="h-screen flex flex-col" id="page-one">
            <nav className="h-24 bg-blue-1 text-text-l">
                <div className="w-5/6 m-auto flex justify-between h-full">
                    <div className="flex items-center ">
                        <img src={logo} alt="" className="w-24" />
                    </div>
                    <div className="h-full flex justify-end gap-8 items-center mr-8 font-regular">
                        <div className="font-medium border-b-2 border-blue-11 text-blue-12">
                            Home
                        </div>
                        <div className="text-gray-700">
                            Event
                        </div>
                        <div className="text-gray-700">
                            Team
                        </div>
                        <div className="font-medium text-blue-11">
                            Mitmachen
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-grow bg-red-3 mb-12">
                <div className="inner w-5/6 m-auto">
                    <div className="feature text-left relative w-5/12 mt-16">
                        <div className="font-medium text-[68px]">
                            Legal Tech
                        </div>
                        <div className="ml-36 leading-[26px] font-pen font-medium text-[90px] text-red-10">
                            loves
                        </div>
                        <div className="ml-52 text-[140px] font-medium text-blue-12 leading-[100px]">
                            you!
                        </div>
                        <img src={heart} alt="" className="w-24 h-24 absolute top-12 right-2" />
                        <img src={heart} alt="" className="w-16 h-16 rotate-[-17deg] absolute top-28 right-24" />
                        <img src={heart} alt="" className="w-8 h-8 rotate-[5deg] absolute top-36 right-0" />
                    </div>
                    <div className="details text-left grid grid-cols-12 grid-flow-row mt-20 relative">
                        <div className="col-span-3"></div>
                        <div className="col-span-9 font-regular text-head-l">02.01.23 - 08.01.23. Deutschlands groesster Legal Tech Hackathon von und fuer Studierende. Offen und inklusiv. Non-Profit. Trotzdem € 2.500,- Preisgeld.Und das Beste: Nur dein Interesse genuegt, wir bringen dir alles bei!  </div>
                    </div>
                    <div className="float-right mt-8">
                        <div className="bg-blue-12 text-blue-1 rounded text-center px-12 py-6 inline-block cursor-pointer">
                            Mehr erfahren!
                        </div>
                    </div>
                </div>
                <img src={downCaret} alt="" className="absolute bottom-4 left-16 cursor-pointer" onClick={() => scrollTo('#page-two')} />
            </div>
        </div>
        <div id="page-two" className="h-screen relative flex">
            <div className="items-center flex h-full absolute right-[-0.5rem] mt-auto">
                <div className="h-4/5 bg-red-10 w-16 rounded"></div>
            </div>
            <div className="absolute top-4 right-6 rounded bg-blue-12 text-blue-1 text-[68px] px-12 py-4">
                About LLT
            </div>
            <div className="h-full block w-full">
                <div className="w-8/12 h-full m-auto flex flex-col items-center justify-center align-middle gap-4">
                    <div className="items-center justify-center flex flex-row align-middle gap-4 bg-blue-4 p-6 border-2 border-blue-12 rounded">
                        <img src={personAdd} alt="" />
                        <div className="text-head-l font-regular text-blue-12 text-left">
                            Eine Kooperation aller studentischen Legal Tech Initiativen Deutschlands.
                        </div>
                    </div>
                    <div className="items-center justify-center flex flex-row align-middle gap-4 bg-blue-1 p-6 border-2 border-blue-4 rounded">
                        <div className="text-head-l font-regular text-blue-12 text-right">
                            Ein standortuebergreifender Zusammenschluss von Universitaeten und Non-Profits.
                        </div>
                        <img src={explore} alt="" />
                    </div>
                    <div className="items-center justify-center flex flex-row align-middle gap-4 bg-blue-4 p-6 border-2 border-blue-12 rounded">
                        <img src={support} alt="" />
                        <div className="text-head-l font-regular text-blue-12 text-left">
                            Betreuung und Unterricht durch fuehrende Expert:innen und Dozierende aus den Bereichen Start-Up, Rechtswissenschaften und Technik.
                        </div>
                    </div>
                </div>
            </div>
            <img src={downCaret} alt="" className="absolute bottom-6 right-28 cursor-pointer" onClick={() => scrollTo('#page-three')} />
        </div>
        <div id="page-three" className="h-screen relative flex">

            <div className="items-center flex h-full absolute left-[-0.5rem] mt-auto">
                <div className="h-4/5 bg-red-3 w-16 rounded"></div>
            </div>
            <div className="text-blue-12 text-[68px] absolute z-10 top-10 left-6">
                Partners
            </div>
            <div className="h-full flex justify-center align-middle items-center w-full mt-10">
                <div className="grid grid-cols-8 grid-rows-5 h-4/5 gap-2">
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                </div>
            </div>
            <img src={downCaret} alt="" className="absolute bottom-6 left-28 cursor-pointer" onClick={() => scrollTo('#page-four')} />
        </div>
        <div id="page-four" className="h-screen relative flex flex-col">
            <div className="flex h-full absolute left-[-0.5rem]">
                <div className="h-2/5 bg-red-3 w-16 rounded"></div>
            </div>
            <div className="h-3/5 flex justify-center align-middle items-center w-full mt-10">
                <div className="grid grid-cols-8 grid-rows-3 h-4/5 gap-2">
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                    <img src={sun} alt=""/>
                </div>
            </div>
            <div className="h-2/5 w-full bg-blue-12 flex flex-col">
                <div className="w-4/5 m-auto flex flex-row items-center justify-between align-middle w-full flex-grow">
                    <img src={invertedBwLogo} alt="" />
                    <div className="flex flex-row gap-4 justify-center align-middle items-center">
                        <img src={user} alt="" />
                        <div className="text-left">
                            <div className="text-head-l text-blue-1 mb-4">
                                Contact
                            </div>
                            <div className="font-medium text-blue-1 text-text-l mb-2">
                                Name Ansprechpartner:in
                            </div>
                            <div className="font-medium text-blue-1 text-text-l">
                                hello@legallovestech.de
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-8 text-center flex gap-8 justify-center font-semi-bold text-blue-1">
                    <a href="/" className="text-text-l">Datenschutzerklaerung</a>
                    <a href="/" className="text-text-l">Impressum</a>
                    <a href="/" className="text-text-l">Interner Bereich</a>
                </div>
            </div>
        </div>
    </div>
  );
}

// smooth scrolls to the next given element by its css selector
function scrollTo(selector: string): undefined {
    // https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery

    const nextElement = document.querySelector(selector) as HTMLElement;
    if (!nextElement) {
        // no element found, developer at fault
        return
    }

    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: nextElement.offsetTop
    });
}

export default App;
