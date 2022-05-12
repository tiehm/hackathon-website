import React from 'react';

export class EventInformationList extends React.Component {
  informationList: string[] = [

    'Das Event findet in der ersten Januarwoche 2023 voll remote statt,' +
      ' also vom 02.01.2023 bis einschliesslich 08.01.2023.',

    'Zugelassen werden Teams von bis zu 6 Personen. Alle Teilnehmer:innen' +
    ' sollten sich noch in Studium / Referendariat befinden. Es werden' +
    ' dauerhaft Zoom-Räume sowie eine Infrastruktur über Slack zur Verfügung' +
    ' gestellt, die bei Interesse genutzt werden können. Daneben existieren' +
    ' je ein juristischer und technischer Helpdesk!',

    'Zu Beginn des Events bekommen alle zugelassenen Teams entweder eine' +
    ' Aufgabe zugeteilt, oder die Teams bringen eine eigene Aufgabe mit,' +
    ' an der sie im Lauf des Hackathons arbeiten mochten.' +
    ' Eigene Aufgabenstellungen sind ausdrücklich erlaubt!',

    'Im Lauf der Woche finden Vorträge und Workshops führender Expert:innen' +
    ' statt, deren Teilnahme nicht verpflichtend ist. In diesen Einheiten' +
    ' werden sämtliche Fähigkeiten vermittelt, die notwendig sind,' +
    ' um die Aufgaben zu lösen, und einen Einblick in die entsprechenden' +
    ' Bereiche zu gewahren.',

    'Am Ende der Woche bewertet eine Jury die Prototypen, die die Teams im' +
    ' Laufe der Woche entwickelt haben. Das Siegerteam kann sich über einen' +
    ' Geldpreis i.H.v. € 2.500,- freuen!',

  ];

  render() {
    return <ul className={'list-disc text-text-m lg:text-text-l'}>
      {this.informationList.map((information, i) => {
        if (i+1 === this.informationList.length) {
          return <li key={i}>{information}</li>;
        }
        // eslint-disable-next-line react/jsx-key
        return <li key={i} className="pb-4">{information}</li>;
      })}
    </ul>;
  }
}
