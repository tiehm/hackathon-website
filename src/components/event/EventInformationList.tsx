import React from 'react';

export class EventInformationList extends React.Component {

    render () {
        return <ul className="list-disc text-text-m lg:text-text-l">
            <li className="pb-4">
                Das Event findet in der ersten Januarwoche 2023 voll remote statt, also vom 02.01.2023 bis einschliesslich 08.01.2023.
            </li>
            <li className="pb-4">
                Zugelassen werden Teams von bis zu 6 Personen. Alle Teilnehmer:innen sollten sich noch in Studium / Referendariat befinden. Es werden dauerhaft Zoom-Räume sowie eine Infrastruktur über Slack zur Verfügung gestellt, die bei Interesse genutzt werden können. Daneben existieren je ein juristischer und technischer Helpdesk!
            </li>
            <li className="pb-4">
                Zu Beginn des Events bekommen alle zugelassenen Teams entweder eine Aufgabe zugeteilt, oder die Teams bringen eine eigene Aufgabe mit, an der sie im Lauf des Hackathons arbeiten mochten. Eigene Aufgabenstellungen sind ausdrücklich erlaubt!
            </li>
            <li className="pb-4">
                Im Lauf der Woche finden Vorträge und Workshops führender Expert:innen statt, deren Teilnahme nicht verpflichtend ist. In diesen Einheiten werden sämtliche Fähigkeiten vermittelt, die notwendig sind, um die Aufgaben zu lösen, und einen Einblick in die entsprechenden Bereiche zu gewahren.
            </li>
            <li>
                Am Ende der Woche bewertet eine Jury die Prototypen, die die Teams im Laufe der Woche entwickelt haben. Das Siegerteam kann sich ueber einen Geldpreis i.H.v. € 2.500,- freuen!
            </li>
        </ul>;
    }

}
