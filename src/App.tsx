import React  from 'react';
import { CustomLink } from './CustomLink';
import invertedBwLogo from './img/logo-bw-inverted.svg';
import downCaret from './img/down-caret.svg';
import heart from './img/heart.png';
import { ReactComponent as PersonAddIcon } from './img/person-add.svg';
import { ReactComponent as ExploreIcon } from './img/explore.svg';
import { ReactComponent as SupportIcon } from './img/support.svg';
import recodeLogo from './img/partners/org_recode_text.png'
import orgFrankfurtLogo from './img/partners/org-fra.png'
import orgAachen from './img/partners/org_aachen.svg'
import orgTrierLogo from './img/partners/org_trier_logo_text_white.png'
import mlTechLogo from './img/partners/org_munich.png'
import orgMarburgLogo from './img/partners/org_marburg.png'
import cdpsLogo from './img/partners/cdps.png'
import orgFreiburg from './img/partners/org_freiburg_white.png'
import orgMannheim from './img/partners/org_mannheim_white.png'
import disruptLogo from './img/partners/disrupt.png'
import eLegalLogo from './img/partners/elegal.png'
import legalTechDeLogo from './img/partners/legal_tech_init_de.svg'
import liquidLegalLogo from './img/partners/liquid_legal.png'
import lmuLogo from './img/partners/lmu.png'
import openLegalTechLogo from './img/partners/open_legal_tech.png'
import orgCologneLogo from './img/partners/org_cologne.png'
import orgGiessenLogo from './img/partners/org_giessen.png'
import orgTuebingenLogo from './img/partners/org_tuebingen.png'
import tumLogo from './img/partners/tum.png'
import './App.css';

export class App extends React.Component {


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
            <div className="h-screen flex flex-col" id="page-one">

                <div className="pt-8 px-6 bg-red-3 flex-grow mt-20 lg:mt-16 xl:mt-20 md:pt-16">
                    <div className="inner tabletL:w-4/5 m-auto flex flex-col">
                        <div className="feature text-left relative mb-10 wd-10/12 xs:w-10/12 lxs:w-8/12 sm:w-7/12 md:w-8/12 lg:w-7/12 xl:w-1/2 2xl:w-5/12">
                            <div id="heart-background" className="">
                                <div className="font-medium text-blue-12 text-[50px] iPhoneXS:text-[50px] text-left lg:text-[80px] tabletL:pl-10">
                                    Legal Tech
                                </div>
                                <div className="leading-[80px] iPhoneXS:leading-[70px] font-pen font-medium iPhoneXS:text-[100px] text-[100px] xl:text-[140px] lg:text-[130px] text-red-10 text-center -ml-12">
                                    loves
                                </div>
                                <div id="headline-you" className=" relative text-[100px] iPhoneXS:text-[100px] lg:text-[140px] iPhoneXS:leading-[20px] font-medium text-blue-12 leading-[40px] text-right tabletL:pr-10">
                                    you!
                                </div>
                            </div>
                        </div>
                        <div className="details text-blue-12 font-semi-bold text-text-l mt-16 lg:w-8/12 md:ml-auto md:text-head-m lg:text-head-m md:font-regular tabletL:w-9/12 2xl:text-head-l">
                            <div className="mb-4 text-justify">
                                02.01.23 - 08.01.23. Deutschlands größter Legal Tech Hackathon von und für Studierende. Offen und inklusiv. Non-Profit. Trotzdem € 2.500,- Preisgeld. Remote. Und das Beste: Nur dein Interesse genügt, wir bringen dir alles bei!
                            </div>
                            <CustomLink to="/event" className="bg-blue-12 text-blue-1 rounded text-center px-8 py-5 cursor-pointer md:px-12 md:py-8 md:text-head-m ml-auto w-fit block mt-12" >
                                Mehr erfahren!
                            </CustomLink>
                        </div>
                    </div>
                    <img src={downCaret}
                         alt=""
                         className="animate-bounce hover:animate-none absolute bottom-7 caret-left cursor-pointer w-12 hover:scale-110 transition-all duration-200"
                         onClick={() => this.scrollTo('#page-two')}/>
                </div>
            </div>
            <div id="page-two" className="h-screen relative flex">
                <div className="items-center flex h-full absolute right-[-0.5rem] mt-auto">
                    <div className="h-4/5 bg-red-10 w-16 rounded"></div>
                </div>
                <div className="absolute top-12 right-0 rounded-l bg-blue-12 text-blue-1 text-head-l px-6 py-3 md:px-12 md:py-6 lg:right-8 lg:rounded lg:px-20 lg:py-10 2xl:right-[10%]">
                    About LLT
                </div>
                <div className="h-full block w-full">
                    <div className="h-full m-auto flex flex-col items-center justify-center gap-10 md:gap-6 font-medium lg:w-3/5 text-text-m lg:text-head-m">
                        <div className="w-11/12 -mr-10 lg:w-full lg:mr-0 items-center justify-center grid grid-cols-12 p-6 md:p-3 lg:pd-6 iPhoneXS:p-3 gap-7 bg-blue-4 border-2 border-blue-12 rounded relative z-10">
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
                <img src={downCaret}
                     alt=""
                     className="animate-bounce hover:animate-none caret-right absolute bottom-7 md:left-auto cursor-pointer w-12 scale-100 hover:scale-130 transition-all duration-200"
                     onClick={() => this.scrollTo('#page-three')}/>
            </div>
            <div id="page-three" className="relative flex z-10">
                <div className="items-center flex h-full absolute left-[-0.5rem] mt-auto">
                    <div className="h-4/5 bg-red-3 w-12 rounded"></div>
                </div>
                <div className="absolute top-20 left-0 rounded-r bg-blue-12 text-blue-1 text-head-l px-6 py-3 md:px-12 md:py-6 lg:left-6 lg:rounded lg:px-20 lg:py-10 2xl:left-[10%] 2xl:top-10">
                    Partners
                </div>
                <div className="h-full flex justify-center items-center w-4/5 ml-auto mr-2 pt-52 z-10 flex-grow">
                    <div className="grid grid-flow-row-dense grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-9 h-full gap-2 w-4/5 lg:w-11/12 ml-auto mr-4 justify-center align-middle items-center">

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={recodeLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgAachen} className="h-full w-full object-contain" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-12 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgTrierLogo} className="h-full w-full object-contain" alt=""/>
                        </div>
                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFrankfurtLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-12 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgMannheim} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgMarburgLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgTuebingenLogo} className="h-full w-full object-contain" alt=""/>
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={openLegalTechLogo} className="h-full w-full object-contain" alt=""/>
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgCologneLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={mlTechLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={liquidLegalLogo} className="h-full w-full object-contain" alt=""/>
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={cdpsLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={eLegalLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="p-2 bg-blue-12 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={disruptLogo} className="h-full w-full object-contain" alt=""/>
                        </div>

                        <div className="col-span-2 p-2 bg-blue-12 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgFreiburg} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={legalTechDeLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="col-span-2 p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={orgGiessenLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                        <div className="p-2 bg-blue-1 border-4 border-blue-4 rounded h-24 flex justify-center align-middle items-center">
                            <img src={tumLogo} className="h-full w-full object-contain" alt=""/>
                        </div>


                        <div className="p-2 bg-blue-4 border-2 border-blue-12 rounded h-24 flex justify-center align-middle items-center">
                            <img src={lmuLogo} className="h-full w-full object-contain" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="relative flex flex-col mt-16">
                <div className="w-full bg-blue-12">
                    <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:align-middle xl:items-center xl:py-10">
                        <div className="container mx-auto flex flex-row items-center text-center justify-center md:justify-between md:w-4/5 py-4 gap-12 xl:w-1/2 xl:mx-auto xl:flex-row-reverse">
                            <div className="flex flex-row justify-center align-middle items-center gap-4">
                                <div className="flex justify-center align-middle items-center">
                                    <div className="sebastian w-32 h-32 rounded-full"></div>
                                </div>
                                <div className="hidden w-4/5 text-left lg:flex lg:flex-col">
                                    <div className="text-head-m font-medium text-blue-1 mb-4">
                                        Contact
                                    </div>
                                    <div className="font-semi-bold text-blue-1 text-text-l mb-2">
                                        Sebastian Nagl
                                    </div>
                                    <div className="font-semi-bold text-blue-1 text-text-l">
                                        hello@legallovestech.de
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img src={invertedBwLogo} alt="" className="w-32 h-32"/>
                            </div>
                        </div>
                        <div className="w-4/5 text-left mx-auto flex-grow lg:hidden">
                            <div className="text-head-m font-medium text-blue-1 mb-4">
                                Contact
                            </div>
                            <div className="font-semi-bold text-blue-1 text-text-l mb-2">
                                Sebastian Nagl
                            </div>
                            <div className="font-semi-bold text-blue-1 text-text-l">
                                hello@legallovestech.de
                            </div>
                        </div>
                    </div>
                    <div className="pt-14 pb-6 text-center flex flex-col gap-4 justify-center font-semi-bold text-blue-1 lg:basis-full lg:flex-row lg:gap-14">
                        <a href="/"
                           className="text-text-s">Datenschutzerklärung</a>
                        <a href="/" className="text-text-s">Impressum</a>
                        <a href="/" className="text-text-s">Interner Bereich</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App;
