import React from 'react';
import invertedBwLogo from '../img/logo-bw-inverted.svg';

export class Team extends React.Component {

    render () {
        return (<div className="overflow-x-hidden">
            <div className="h-screen flex flex-col">
                <div className="bg-red-3 w-full flex justify-center align-middle items-center h-full mb-10 flex-grow select-none">
                    <div className="font-medium text-blue-12 text-[80px] lg:text-[140px] text-center">
                        Coming soon!
                    </div>
                </div>
            </div>
            <div id="page-four" className="relative flex flex-col mt-16">
                <div className="w-full bg-blue-12">
                    <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:align-middle xl:items-center xl:py-10">
                        <div className="container mx-auto flex flex-row items-center text-center justify-center md:justify-between md:w-4/5 py-4 gap-12 xl:w-1/2 xl:mx-auto xl:flex-row-reverse">
                            <div className="flex flex-row justify-center align-middle items-center gap-4">
                                <div className="flex justify-center align-middle items-center">
                                    <div className="sebastian w-32 h-32 rounded-full">

                                    </div>
                                    {/*<img src={sebastianImg}*/}
                                    {/*     alt=""*/}
                                    {/*     className="rounded-full"/>*/}
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
            </div>);
    }
}
