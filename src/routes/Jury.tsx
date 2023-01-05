import classNames from 'classnames';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Footer} from '../components/footer/Footer';

import sarah from '../img/teamMembers/sarah.png';
import matthias from '../img/MGrabmair.jpg';
import annSophie from '../img/teamMembers/ann_sophie.png';
import nicole from '../img/NicoleFormicaSchiller.png';
import kirsten from '../img/KirstenRulf.png';

//
type JuryMember = {
  name: string
  shortText: string
  bgClass: string
  text: string
  img: string
}

import './Jury.css';

export class Jury extends React.Component {
  juryMembers: JuryMember[] = [
    {
      name: 'Kirsten Rulf',
      shortText: 'Kirsten Rulf bringt sich mit ihrer internationalen und' +
        ' digitalpolitischen Expertise ein.',
      text: 'Kirsten Rulf befasst sich bereits seit Jahren mit den Themen' +
        ' Technologie, Digitalisierung und Innovation. Sie baute im' +
        ' Bundeskanzleramt das Referat für Grundsatzfragen der' +
        ' Digitalpolitik auf und ist frischgebackene Absolventin des Yale' +
        ' World Fellows Programms. Sie ist somit absolute Expertin für' +
        ' Zukunftsthemen und bereichert die Jury auch mit ihrer' +
        ' internationalen Erfahrung.',
      bgClass: 'kirsten-pic jury-pic',
      img: kirsten,
    },
    {
      name: 'Nicole Formica-Schiller',
      shortText: 'Nicole Formica-Schiller vertritt die wirtschaftliche' +
        ' Sichtweise auf das Thema Legal Tech.',
      bgClass: 'nicole-pic jury-pic',
      text: 'Nicole Formica-Schiller ist CEO und Gründerin der Pamanicor' +
        ' Health AG, einer globalen Beratungsfirma für transformative' +
        ' Technologien, Life Science und Biotech und berät Industrie,' +
        ' Regierungen, Ministerien und Wissenschaft in den Bereichen' +
        ' Digitalisierung, Geopolitik und Policy. Die Juristin ist Mitglied' +
        ' verschiedener Beiräte, Gremien und Vorstände, wie u.a. dem' +
        ' International Digital Science Advisory Board der Paris Lodron' +
        ' Universität Salzburg, dem German Israeli Health Forum for' +
        ' Artificial Intelligence gefördert durch das' +
        ' Bundesgesundheitsministerium sowie Vorstandsmitglied Bayern des' +
        ' Bundesverbands Künstliche Intelligenz. Im Rahmen von BayFID, einer' +
        ' Initiative der Bayrischen Digitalministerin Judith Gerlach unter' +
        ' Schirmherrschaft des Ministerpräsidenten Dr. Markus Söder für Mehr' +
        ' Frauen in Digitalberufen, wurde sie zum Rolemodel berufen, von der' +
        ' OECD zur KI-Expertin ernannt und von Forbes für "innovativsten' +
        ' Ideen" im Bereich KI und Blockchain ausgewählt.',
      img: nicole,
    },
    {
      name: 'Sarah Rachut',
      shortText: 'Sarah Rachut engagiert sich im universitären Bereich für' +
        ' mehr Legal Tech.',
      bgClass: 'sarah-pic jury-pic',
      text: 'Sarah Rachut ist wissenschaftliche Mitarbeiterin am Lehrstuhl' +
        ' für Recht und Sicherheit der Digitalisierung von Prof. Dr. Dirk' +
        ' Heckmann sowie Geschäftsführerin des dortigen Forschungsinstituts' +
        ' Center for Digital Public Services. Sie studierte' +
        ' Rechtswissenschaften an der Universität Passau und absolvierte ihr' +
        ' Rechtsreferendariat am Oberlandesgericht in München. Sarah Rachut' +
        ' forscht zu verfassungsrechtlichen Grundsatzfragen in digitalen' +
        ' Kontexten mit Schwerpunkten in den Bereichen E-Government,' +
        ' E-Health und E-Education und verfolgt in diesem Bereich auch ihr' +
        ' Promotionsvorhaben.',
      img: sarah,
    }, {
      name: 'Matthias Grabmair',
      bgClass: 'matthias-pic jury-pic',
      shortText: 'Prof. Dr. Matthias Grabmair ist Tenure-Track Assistant' +
        ' Professor für Legal Tech an der School for Computation,' +
        ' Information, and Technology der TU München.',
      text: ' Er arbeitet an der Anwendung von künstlicher Intelligenz,' +
        ' maschinellem Lernen, Data Science, Natural Language Processing,' +
        ' und Wissensrepräsentation zur Lösung von Aufgaben und Problemen in' +
        ' den Bereichen Recht, Justiz und öffentliche Verwaltung. Er' +
        ' studierte Rechtswissenschaften an der Universität Augsburg sowie' +
        ' der University of Pittsburgh, wo er im Bereich intelligenter' +
        ' Systeme promovierte. Im Anschluss lehrte und forschte er am' +
        ' Language Technologies Institute der Carnegie Mellon University und' +
        ' arbeitete als Legal Data Scientist bei der SINC GmbH.',
      img: matthias,
    }, {
      name: 'Ann-Sophie Blaser',
      shortText: 'Ann-Sophie Blaser vertritt die Studierenden sowie die' +
        ' studentischen Legal Tech Initiativen.',
      bgClass: 'ann-sophie-pic jury-pic',
      text: 'Ann-Sophie Blaser studiert Rechtswissenschaften an der' +
        ' Ludwig-Maximilians-Universität München und steht kurz vor dem' +
        ' Abschluss des ersten Staatsexamens. Als Mitglied und ehemaligen' +
        ' Vorstandsvorsitz der Munich Legal Tech Student Association e.V.' +
        ' (kurz: MLTech) engagiert sie sich für Legal Tech an den' +
        ' Universitäten. Ihr Ziel ist es Juristen und Informatiker, sowie' +
        ' interessierte Studierende aus anderen Fachbereichen' +
        ' zusammenzubringen und einen interdisziplinären Austausch zu' +
        ' ermöglichen.',
      img: annSophie,
    },
  ];

  state = {
    currentlySelectedJuryMember: null as JuryMember | null,
    currentlySelectedJuryMemberIndex: null as number | null,
  };

  selectJuryMember(i: number): void {
    if (this.state.currentlySelectedJuryMemberIndex === i) {
      this.setState({
        currentlySelectedJuryMember: null,
        currentlySelectedJuryMemberIndex: null,
      });
    } else {
      this.setState({
        currentlySelectedJuryMember: this.juryMembers[i],
        currentlySelectedJuryMemberIndex: i,
      });
    }
  }

  render() {
    return (<div className="overflow-x-hidden">
      <div className={'min-h-screen flex bg-red-3 w-full justify-center ' +
        'items-center mb-10'}>
        <div className={classNames('hidden md:block w-full px-12 lg:w-4/5' +
          ' xl:w-3/5 mx-auto normal-view mt-[12%] md:mt-[12%] lg:mt-[10%]' +
          ' xl:mt-[10%] 2xl:mt-[8%]')}>

          <div className={'w-full grid grid-cols-5 '}>
            {this.juryMembers.map((member, i) => {
              return <div key={i}
                onClick={() => this.selectJuryMember(i)}
                className={classNames('w-full test transition-all' +
                  ' cursor-pointer', member.bgClass,
                  this.state.currentlySelectedJuryMemberIndex === i ?
                  'scale-105 z-10 rounded-sm' :
                  'grayscale hover:rounded-sm')}/>;
            })}
          </div>
          <div className={'w-full bg-blue-3 md:h-[450px] xl:h-[520px]' +
            ' 2xl:h-[450px] flex' +
            ' justify-center' +
            ' align-middle items-center'}>
            {this.state.currentlySelectedJuryMember &&
              <div className={'w-4/5 h-4/5 pt-4 text-blue-900'}>
                <div className={'text-head-m font-bold mb-4'}>
                  {this.state.currentlySelectedJuryMember.name}
                </div>
                <div className={'opacity-90 text-semibold mb-4'}>
                  {this.state.currentlySelectedJuryMember.shortText}
                </div>
                <div className={'opacity-90 text-text-subtitle'}>
                  {this.state.currentlySelectedJuryMember.text}
                </div>
              </div>}
            {!this.state.currentlySelectedJuryMember &&
              <div className={'text-head-sm text-center lg:text-head-m' +
                ' font-bold mb-4' +
                ' text-blue-900 px-4'}>
                Erfahre mehr über unsere Jurymitglieder, indem du auf
                ihre Profilbilder klickst.
              </div>}
          </div>

        </div>
        <div className={'block w-full h-4/5 py-4 md:hidden mt-28'}>
          <Swiper
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={1.1}
            centeredSlides={true}>

            {this.juryMembers.map((card, i) => {
              return <SwiperSlide key={i} className="block rounded">
                <div className={classNames('flex flex-col p-10')}>
                  <div className={classNames('flex flex-col justify-center' +
                    ' items-center align-middle gap-4' +
                    ' w-full pb-6')}>
                    <div className={classNames(
                        'h-full' +
                      ' h-56' +
                      ' w-56 flex' +
                      ' justify-center align-center items-center' +
                      ' -left-20')}>
                      <img
                        src={card.img}
                        className={'h-auto max-h-[80%] rounded'}
                        alt={card.name} />
                    </div>
                    <div className={classNames('flex flex-col gap-6' +
                      ' text-left')}>
                      <div className={classNames('text-head-m font-semi-bold')}>
                        { card.name }
                      </div>
                      <div className={classNames('text-text-l ')}>
                        { card.shortText }
                      </div>
                    </div>
                  </div>
                  <div className={classNames('text-text-m text-left')}>
                    {card.text}
                  </div>
                </div>
              </SwiperSlide>;
            })}

          </Swiper>

        </div>
      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
