import React from 'react';
import {Footer} from '../components/footer/Footer';
import {TeamCard} from '../components/team/TeamCard';

// TeamMember holds the information about a team member to show on the team page
type TeamMember = {
    // full name of the team member
    name: string
    // the description of their job / whatever they say about themselves
    details: string
    // the email under which someone can contact that team member
    email: string
    // if present, the linked in profile of the team member
    linkedIn?: string
    // a minimal description about the team member, like: "HR Person"
    shortDesc: string
    // the background class references the css class which has the correct
    // image of the person in the background (found in TeamCard.css)
    backgroundClass: string
}

export class Team extends React.Component {
  private teamMembers: TeamMember[]= [
    {
      name: 'Sebastian Nagl',
      shortDesc: 'Initiator & Junge für Alles',
      email: 'hallo@legallovestech.de',
      linkedIn: 'https://www.linkedin.com/in/sebastian-nagl-94b276162/',
      backgroundClass: 'basti-pic',
      details: 'Kümmert sich um Content und Branding des Legal ❤ Tech, und ' +
          'alles, was sonst noch so anfällt. Daneben der beste ' +
          'Dungeons & Dragons Gamemaster und begeisterter Rennrad-Fahrer.',
    },
    {
      name: 'Sarah Rachut',
      shortDesc: 'Strategy & Memes',
      email: 'event@legallovestech.de',
      linkedIn: 'https://www.linkedin.com/in/sarah-rachut/',
      backgroundClass: 'sarah-pic',
      details: 'Interessiert sich für die großen Fragen von Recht und ' +
          'Digitalisierung und bemüht sich um einen möglichst großen Impact ' +
          'des Legal ❤ Tech Hackathons. Wenn sie nicht in den Untiefen des ' +
          'Internets herumstöbert findet man sie im Zweifel am Buffet.',
    },
    {
      name: 'Muskaan Multani',
      shortDesc: 'Eventkoordination',
      email: 'event@legallovestech.de',
      linkedIn: 'https://www.linkedin.com/in/muskaan-multani-987873184/',
      backgroundClass: 'muskaan-pic',
      details: 'Organisiert die Vorträge und Workshops für den Legal ❤ Tech ' +
          'Hackathon. Ansonsten besucht Sie selbst gerne Events und hat eine ' +
          'große Leidenschaft für die Formel 1',
    },
    {
      name: 'Charlotte Falk',
      shortDesc: 'Kommunikation & PR',
      email: 'marketing@legallovestech.de',
      linkedIn: 'https://www.linkedin.com/in/charlotte-falk-129a7a106/ ',
      backgroundClass: 'charlotte-pic',
      details: 'Sorgt dafür, dass der Legal ❤ Tech in den Sozialen Medien ' +
          '(und weit darüber hinaus) richtig zur Geltung kommt.',
    },
    {
      name: 'Ann-Sophie Blaser',
      shortDesc: 'Teilnerhmer:innen & Initiativen',
      email: 'hallo@legallovestech.de',
      linkedIn: 'https://www.linkedin.com/in/ann-sophie-blaser-a9706b222/',
      backgroundClass: 'ann-sophie-pic',
      details: 'Koordiniert die Zusammenarbeit mit den Legal Tech ' +
          'Initiativen Deutschlands und kümmert sich um die ' +
          'Teilnehmer:innen. In der Freizeit Gamerin und Bücherwurm.',
    },
    {
      name: 'Fabian Wiedemann',
      shortDesc: 'Hochschulkontakte',
      email: 'kooperation@legallovestech.de',
      linkedIn: 'https://www.linkedin.com/in/fabian-wiedemann/',
      backgroundClass: 'fabian-pic',
      details: 'Kümmert sich um die Verbreitung des Events als Teil ' +
          'universitärer Lehre. Mag cinematographische Klassiker wie ' +
          'Rick and Morty, The Office und Community.',
    },
    {
      name: 'Charlie Tiehm',
      shortDesc: 'Developer',
      email: 'hallo@legallovestech.de',
      backgroundClass: 'charlie-pic',
      details: 'Programmiert jede Idee aus, die nicht bei drei auf\'m' +
                ' Baum ist. Kümmert sich vorallem um die Website und' +
                ' technische Aufgaben im Hintergrund.',
    },
  ];

  render() {
    return (<div className="overflow-x-hidden">
      <div className={'min-h-screen flex bg-red-3 w-full justify-center ' +
          'items-center mb-10'}>
        <div className={'container p-10 grid grid-cols-1 sm:grid-cols-2 ' +
            'lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-full flex ' +
            'justify-center items-center mt-24 tabletL:mt-28 lg:mt-32 xl:mt-20'}
        >

          {this.teamMembers.map((partner, index) =>
            <TeamCard
              key={index}
              details={partner.details}
              backgroundClass={partner.backgroundClass}
              email={partner.email}
              name={partner.name}
              shortDesc={partner.shortDesc}
              linkedIn={partner.linkedIn} />,
          )}

        </div>
      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
