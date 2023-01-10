import classNames from 'classnames';
import React from 'react';
import {Footer} from '../components/footer/Footer';
import GroupPicture from '../img/group_picture.png';

export class Result extends React.Component {
  render() {
    return (<div className="overflow-x-hidden">
      <div className={classNames('min-h-screen flex w-full' +
        ' justify-center items-center mb-10 mt-40')}>
        <div className="text-left text-blue-12 flex
        flex-col gap-4 w-4/5 md:w-2/3 max-w-[800px] mx-auto">
          <div>
            <h1 className={classNames('text-2xl font-bold')}>
              Legal Loves Tech Hackathon 2023
            </h1>
            <h1 className={classNames('text-xl font-semibold')}>
              „ComplAI“ gewinnt bundesweit größten Hackathon im Bereich Legal
              Tech
            </h1>
          </div>
          <img src={GroupPicture} alt=""/>
          <div className={classNames('flex flex-col gap-4')}>
            <p>
              Eine Woche voller Legal Tech für jedermann – so lautete das
              ambitionierte Ziel des Legal Loves Tech Hackathons (LLT), der vom
              2. bis 8. Januar 2023 stattfand. Neben der Bewältigung einer
              Hackathonaufgabe wurde ein umfassendes Rahmenprogramm mit
              Workshops, Vorträgen und weiteren Challenges geboten, sodass
              jede:r unabhängig von Vorkenntnissen und Interessensschwerpunkten
              einen Zugang zum Thema Legal Tech erhalten konnte.
            </p>
            <p>
              Rund <strong>150 Studierende aus ganz Deutschland</strong> und den
              verschiedensten Disziplinen kamen remote zusammen, um von Legal
              Tech Expert:innen zu lernen, sich auszutauschen und in über 25
              Teams mit ihren entwickelten Lösungen die Jury zu überzeugen.
              Dabei konnten die Teams aus von den Veranstalter:innen gestellten
              Problemen auswählen, auf die durch das Kursprogramm dezidiert
              vorbereitet wurde, oder eigene Herausforderungen mitbringen, denen
              sie mit ihrem Legal Tech Tool begegnen wollten.
            </p>
            <p>
              Zum offiziellen Start des Hackathons am 2. Januar richtete
              der <strong>
              Bayerische Staatsminister der Justiz Georg Eisenreich
              </strong> als <strong>
              Schirmherr des
              LLT
              </strong> motivierende
              Worte an die Teilnehmenden und betonte die Chancen von Legal Tech
              in der Breite sowie die Wichtigkeit von Formaten wie dem LLT
              Hackathon.
            </p>
            <p>
              Anschließend startete das inhaltliche Rahmenprogramm mit Impulsen
              von Dirk Hartung und Bernhard Waltl, die die Möglichkeiten rund um
              Legal Tech aus rechtlicher und operativer Sicht darstellten.
              Abgerundet wurde der Tag durch einen Workshop zum Thema
              Ideenentwicklung und Prototyping, in dem Marianna Matokhniuk und
              Manuel Geitner ihre wertvollen Erfahrungen aus der
              Start-Up-Beratung teilten.
            </p>
            <p>
              Am zweiten Tag wurden den Teams zahlreiche Tools und Ansätze für
              ein effektives und zielgerichtetes Arbeiten an die Hand gegeben,
              um das Ziel, nämlich bis zum Ende der Woche einen Prototyp zu
              entwickeln, erreichen zu können. Die Workshops konzentrierten sich
              unter anderem auf agile Arbeitsmethoden, Produktentwicklung,
              verschiedene mögliche Geschäftsmodelle sowie den Umgang mit
              unterstützender Software. Unter den Vortragenden war mit Debbie
              Blume und Nico Stumpf auch der Digital Service vertreten, der an
              digitalen Lösungen für die Bundesverwaltung arbeitet und somit
              einen Einblick in die Möglichkeiten für Legal Tech im Staat
              ermöglichte. Darüber hinaus nahm Martin Fries die Teilnehmenden
              mit dem ersten rechtlichen Vortrag an die Hand und zeigte
              Potentiale und (juristische) Herausforderungen für die Entwicklung
              eines Fristen-Chatbots auf.
            </p>
            <p>
              Der dritte Tag konzentrierte sich auf die technische Umsetzung der
              Legal Tech Tools. Sebastian Nagl startete mit dem ersten Teil des
              Coding Kurses und am Beispiel von Open Decision erhielten die
              Teilnehmenden einen Blick auf die Möglichkeiten von Open Source
              Software für die eigene Produktenwicklung. Der rechtliche Vortrag
              des Tages befasste sich mit dem Geschäftsmodell von sog.
              „Abmahnanwälten“, die Abmahnungen in großer Zahl verschicken und
              dabei teils auf Automatisierung zurückgreifen, und welche
              (technischen) Möglichkeiten bestehen, Laien bei der Abwehr der
              teilweise ungerechtfertigten Abmahnungen zu unterstützen.
              Abgerundet wurde der Tag durch die Einblicke von Vadym Kuzmenko,
              der auf seine eigenen Erfahrungen beim Aufbau eines Legal Tech
              Start-Ups einging. Dabei verriet er unter anderem, welche
              Bedeutung frühzeitiges Marketing hat und wie man am besten mit
              unerwarteten Marktänderungen umgehen sollte.
            </p>
            <p>
              Am Donnerstag konzentrierten sich die Teams nochmals auf die
              Kernthemen: Legal und Tech. Dirk Heckmann beleuchtete unter dem
              Titel „Gemeinfrei und Gemeinwohl“, welche Daten durch Legal Tech
              Anwendungen problemlos genutzt werden können und wo es aus
              urheberrechtlichen Gründen knifflig werden kann. Sebastian Nagl
              versammelte das engagierte Teilnehmerfeld zudem in seinem zweiten
              Teil des Coding Kurses. Der Abend schloss mit weiteren Einblicken
              von Vadym Kuzmenko zur Rolle von Investoren beim Aufbau eines
              Legal Tech Start-Ups.
            </p>
            <p>
              Mit dem fünften Tag des LLT Hackathons folgte der letzte
              inhaltlich intensive Tag für die Teams. Neben dem letzten Teil des
              Coding Kurses folgten mit den Vorträgen von Matthias Grabmair
              („Data driven work for lawyers“) und Ann-Kristin Mayrhofer zu
              elektronischen Postfächern nochmals echte Highlights. Darüber
              hinaus lud das Liquid Legal Institute am Abend zu einem zwanglosen
              Austausch am digitalen open table ein.
            </p>
            <p>
              Nachdem die letzten 48 Stunden bis zum großen Finale am Sonntag
              angebrochen waren, folgte die wohl arbeitsintensivste Zeit für die
              Teams. Den gesamten Samstag wurde fleißig konzipiert, an den
              Prototypen gebaut und die Pitches ausgearbeitet. Einen letzten
              Schliff erhielten die Finaleinreichungen durch eine Einführung ins
              Marketing sowie ein ausführliches Pitch-Training, in dem die Teams
              insbesondere auf die Bedeutung von Storytelling aufmerksam gemacht
              wurden.
            </p>
            <br/>
            <p>
              14 Teams qualifizierten sich schließlich für das große Finale am
              Sonntagnachmittag und präsentierten die von ihnen entwickelten
              Lösungen. Dabei hatten sie jeweils vier Minuten Zeit, um die Jury
              restlos von ihrer Idee zu überzeugen. Die Jury, bestehend aus
              Kirsten Rulf, Nicole Formica-Schiller, Matthias Grabmair,
              Ann-Sophie Blaser und Sarah Rachut, tat sich bei der Vielzahl und
              der Qualität der Einreichungen sichtlich schwer, die Gewinnerteams
              zu küren. Bevor die ersten drei Plätze verkündet wurden, betonte
              Ann-Sophie Blaser nochmals, wie intensiv sich die Jury mit jeder
              einzelnen Idee auseinandergesetzt habe.
            </p>
            <p>
              Letztlich konnten sich in den Augen der Jury jedoch drei Teams
              absetzen:
            </p>
            <p>
              Der <strong>erste Platz</strong>
              ging an das <strong>Team „ComplAI“</strong>,
              die mit ihrer Lösung auf die Probleme kleinerer Unternehmen
              eingingen. Damit diese stets den Überblick über
              Gesetzesänderungen, anstehende Neuregulierungen und für sie
              wichtige Gerichtsentscheidungen behalten können, entwickelte
              ComplAI ein <strong>Benachrichtigungstool</strong>. Matthias
              Grabmair betonte bei seiner Gratulation die Relevanz und
              Cleverness der Idee. Besonders hervorzuheben sei außerdem, dass
              das Konzept bereits relativ weit ausgereift sei und ein
              existierendes Problem vieler (Klein-)Unternehmer adressiere.
            </p>
            <p>
              <strong>Platz zwei</strong> konnte sich das
              <strong>Team „LiKA“</strong> sichern,
              die
            einen <strong>Lieferkettenassistenten</strong> zur
            Bewältigung der durch das
            Lieferkettensorgfaltspflichtengesetz
            (LkSG) aufgestellten Anforderungen
            entwickelten. Kirsten Rulf ging in
            ihrer Laudatio auf die unmittelbaren
            und mittelbaren Folgen des LkSG ein
            und zeigte die Bedeutung dessen auf.
            LiKA leiste hierbei einen wichtigen
            Beitrag zur Umsetzung und stelle einen
            zusätzlichen Anreiz für Unternehmen
            dar, sich mit dem Thema zu
            beschäftigen.
            </p>
            <p>
              Das Gewinnerteam des <strong>dritten Platzes</strong> verkündete
              Nicole Formica-Schiller. Sie zeigte sich allgemein begeistert von
              der Vielfalt der gepitchten Ideen und sah beachtliche
              Entwicklungen zu ihrer früheren Studienerfahrungen. Besonders
              überzeugen konnte die Jury auch
              der <strong>Prozesskostenkompass</strong>. Dieser bietet einer
              großen Anzahl von Personen unmittelbare und leicht verständliche
              Unterstützung bei der Beantragung von Prozesskostenhilfe und
              fördert so den Zugang zum Recht. Er hilft unkompliziert dort, wo
              Hilfe dringend gebraucht wird. Der bereits sehr weit entwickelte
              Prototyp sicherte dem Team so den dritten Platz.
            </p>
            <p>
              Auch Schirmherr Georg Eisenreich zeigte sich begeistert von den
              entwickelten Lösungen und lud – wie bereits beim letzten Hackathon
              – das Siegerteam zu einem <strong>
              Gespräch im Bayerischen
              Staatsministerium der
              Justiz</strong> ein. Daneben
              kann sich das Team von ComplAI über den begehrten
              <strong>LLT Pokal, 2.500 Euro Preisgeld und ein Interview
                      in der Zeitschrift Recht Digital (RDi)</strong> freuen.
            </p>
            <p>
              Der LLT Hackathon lebte über die gesamte Woche von einer
              engagierten Community, die sich Tag und Nacht über die
              eingerichteten Slack Channels austauschte und Problemen stets mit
              einer gewissen Prise Humor begegnete. So wundert es nicht, dass
              Teilnehmenden auch rege den eingerichteten Meme-Channel befüllten.
              Bis zuletzt wurde hier gepostet, um sich noch eine Chance in der
              parallelen <strong>Meme Challenge</strong> zu sichern.
            </p>
            <p>
              Das <strong>Organisationsteam</strong> (Sebastian Nagl, Sarah
              Rachut, Muskaan Multani, Fabian Wiedemann, Ann-Sophie Blaser und
              Charlie Tiehm) konnte diese erfolgreiche Woche somit mit
              Glückwünschen an die Gewinnerteams und einem großen Dank an alle
              Teilnehmenden, für das außerordentliche Engagement der
              Vortragenden und Jurymitglieder sowie für den Einsatz des
              Schirmherrn schließen.
            </p>
          </div>
        </div>
      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
