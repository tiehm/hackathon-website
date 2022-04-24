import React from 'react';
import bwLogo from '../img/logo-colored.svg';

export class Event extends React.Component {
  render() {
    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col">
                <div className="pt-8 flex-grow mb-6 lg:mb-0 mt-20 md:pt-16 relative">
                    <div className="text-head-m font-medium text-blue-1 bg-blue-12 rounded-r p-6 w-fit">
                        Anmeldung und Ablauf
                    </div>
                    <div className="items-center flex h-full absolute -right-4 mt-auto">
                        <div className="h-4/6 bg-red-3 w-12 bg-blue-12 rounded -mt-48"></div>
                    </div>
                    <div className="lg:w-4/5 lg:mx-auto py-6 pl-6 pr-10">
                        <ul className=" list-disc text-text-m">
                            <li className="pb-2">
                                Das Event findet in der ersten Januarwoche 2023 voll remote statt, also vom 02.01.2023 bis einschliesslich 08.01.2023.
                            </li>
                            <li className="pb-2">
                                Zugelassen werden Teams von bis zu 6 Personen. Alle Teilnehmer:innen sollten sich noch in Studium / Referendariat befinden. Es werden dauerhaft Zoom-Räume sowie eine Infrastruktur über Slack zur Verfügung gestellt, die bei Interesse genutzt werden können. Daneben existieren je ein juristischer und technischer Helpdesk!
                            </li>
                            <li className="pb-2">
                                Zu Beginn des Events bekommen alle zugelassenen Teams entweder eine Aufgabe zugeteilt, oder die Teams bringen eine eigene Aufgabe mit, an der sie im Lauf des Hackathons arbeiten mochten. Eigene Aufgabenstellungen sind ausdrücklich erlaubt!
                            </li>
                            <li className="pb-2">
                                Im Lauf der Woche finden Vorträge und Workshops führender Expert:innen statt, deren Teilnahme nicht verpflichtend ist. In diesen Einheiten werden sämtliche Fähigkeiten vermittelt, die notwendig sind, um die Aufgaben zu lösen, und einen Einblick in die entsprechenden Bereiche zu gewahren.
                            </li>
                            <li>
                                Am Ende der Woche bewertet eine Jury die Prototypen, die die Teams im Laufe der Woche entwickelt haben. Das Siegerteam kann sich ueber einen Geldpreis i.H.v. € 2.500,- freuen!
                            </li>
                        </ul>
                        <div className="bg-blue-3 font-semi-bold text-text-caption rounded border-[1px] w-fit py-6 px-8 border-blue-12 uppercase ml-auto mt-10">
                            Anmeldung möglich ab 01.10.2022
                        </div>
                    </div>
                </div>
            </div>
            <div id="page-four" className="relative flex flex-col mt-16">
                <div className="w-full bg-red-3">
                    <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:align-middle xl:items-center xl:py-10">
                        <div className="container mx-auto flex flex-row items-center text-center justify-center md:justify-between md:w-4/5 py-4 gap-12 xl:w-1/2 xl:mx-auto xl:flex-row-reverse">
                            <div className="flex flex-row justify-center align-middle items-center gap-4">
                                <div className="flex justify-center align-middle items-center">
                                    <div className="sebastian w-32 h-32 rounded-full">

                                    </div>
                                </div>
                                <div className="hidden w-4/5 text-left lg:flex lg:flex-col">
                                    <div className="text-head-m font-medium text-blue-12 mb-4">
                                        Contact
                                    </div>
                                    <div className="font-semi-bold text-blue-12 text-text-l mb-2">
                                        Sebastian Nagl
                                    </div>
                                    <div className="font-semi-bold text-blue-12 text-text-l">
                                        hello@legallovestech.de
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img src={bwLogo} alt="" className="w-32 h-32"/>
                            </div>
                        </div>
                        <div className="w-4/5 text-left mx-auto flex-grow lg:hidden">
                            <div className="text-head-m font-medium text-blue-12 mb-4">
                                Contact
                            </div>
                            <div className="font-semi-bold text-blue-12 text-text-l mb-2">
                                Sebastian Nagl
                            </div>
                            <div className="font-semi-bold text-blue-12 text-text-l">
                                hello@legallovestech.de
                            </div>
                        </div>
                    </div>
                    <div className="pt-14 pb-6 text-center flex flex-col gap-4 justify-center font-semi-bold text-blue-12 lg:basis-full lg:flex-row lg:gap-14">
                        <a href="/"
                           className="text-text-s">Datenschutzerklärung</a>
                        <a href="/" className="text-text-s">Impressum</a>
                        <a href="/" className="text-text-s">Interner Bereich</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
