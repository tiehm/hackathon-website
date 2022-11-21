import React from 'react';
import bernhardWaltl from '../../img/BernhardWaltl.jpg';
import dirkHartung from '../../img/DirkHartung.jpg';
import fraukeRostalski from '../../img/FraukeRostalski.png';
import christinaMariaLeeb from '../../img/ChristinaMariaLeeb.png';
import annePaschke from '../../img/AnnePaschke.png';
import tamaraDeichsel from '../../img/TamaraDeichsel.png';
import heckmann from '../../img/Heckmann.jpg';
import christianSchlicht from '../../img/ChristianSchlicht.png';
import biancaNeumaier from '../../img/biancaNeumaier.png';
import kirstenRulf from '../../img/KirstenRulf.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Testimonials.css';
import {Navigation} from 'swiper';
import {Caret} from '../Caret';
import {TestimonialSwiper} from './TestimonialSwiper';

type Props = {
  scrollTo: (selector: string) => void
}

export interface Testimonial {
  img: string;
  name: string;
  text: string;
  pictureSource?: string;
  isTooBig?: boolean;
}

export class Testimonials extends React.Component<Props, {}> {
  cards: Testimonial[] = [
    {
      img: bernhardWaltl,
      text: 'Der Rechtsmarkt der Zukunft braucht Kollaboration und Hands-on' +
        ' Erfahrungen. Der LLT Hackathon bringt beides in einer' +
        ' hervorragenden Initiative zusammen.',
      name: 'Dr. Bernhard Waltl',
    }, {
      text: 'Der Hackathon bietet allen Beteiligten eine optimale' +
        ' Gelegenheit des inter&shy;disziplinären Arbeitens. IT und ' +
        ' Recht finden' +
        ' zusammen - eine Vermählung, die in der Praxis immer höhere' +
        ' Bedeutung erlangt und daher auch in der Ausbildung nicht fehlen' +
        ' darf. Im Rahmen eines Hackathons können daher nicht bloß wichtige' +
        ' Erfahrungen gesammelt, sondern Kontakte geknüpft werden, ' +
        'die über das Event selbst Bestand haben.',
      name: 'Prof. Dr. Frauke Rostalski',
      img: fraukeRostalski,
      isTooBig: true,
      pictureSource: 'Pascal Bünning',
    }, {
      img: dirkHartung,
      text: 'Ein großer Wettbewerb bei dem es auf gute Ideen und deren' +
        ' technische Umsetzung ankommt, ist genau das anspruchsvolle' +
        ' Ausbildungs&shy;format, das wir im Legal Tech Bereich brauchen',
      name: 'Dirk Hartung',
    }, {
      text: 'Bei einem Hackathon steht von vornherein fest: Ausnahmslos alle ' +
        'Teilnehmenden sind Gewinner. Gewinner wertvoller Erfahrungen ' +
        'und Kontakte. Teilnahme&shy;empfehlung von Herzen!',
      name: 'Dr. Christina-Maria Leeb',
      img: christinaMariaLeeb,
    }, {
      text: 'Der LegalLovesTech Hackathon bietet die ideale Plattform für' +
        ' angehende Jurist*innen, Informatiker*innen und Interessierte, um' +
        ' gemeinsam innovative Einsatz&shy;möglichkeiten von IT in der' +
        ' Rechts&shy;anwendung zu entdecken, den Grundstein ' +
        'für wett&shy;bewerbs&shy;fähige' +
        ' technische Lösungen zu entwickeln und damit die Zukunft der' +
        ' rechts&shy;anwendenden Berufe mitzugestalten.',
      name: 'Prof. Dr. Dirk Heckmann',
      img: heckmann,
      isTooBig: true,
      pictureSource: 'Kilian Blees / bidt',
    },
    {
      name: 'Dr. Tamara Deichsel',
      text: 'Legal Tech ist der Schlüssel für den zukünftigen Zugang zur' +
        ' Streitbeilegung. Lasst uns diesen gemeinsam gestalten!',
      img: tamaraDeichsel,
    },
    {
      text: 'Täglich erzeugt die Justiz tausende von Datensätzen, die ' +
        'unsere Recht&shy;sordnung widerspiegeln. Der LegalLovesTech ' +
        'Hackathon ' +
        'ermöglicht es allen Beteiligten über die Nutzung dieser Daten und ' +
        'den Zugang zum Recht in einem inter&shy;disziplinären Team neu' +
        ' zu denken ' +
        'und mit innovativen Ansätzen die Rechts&shy;anwendung von morgen zu ' +
        'beeinflussen.',
      name: 'Prof. Dr. Anne Paschke',
      isTooBig: true,
      img: annePaschke,
    },
    {
      text: 'Der Legal Loves Tech Hackathon ist eine großartige' +
        ' Bottom-up-Initiative, von der ich mir wertvolle Impulse auch für ' +
        'die Justiz verspreche!',
      name: 'Dr. Christian Schlicht',
      img: christianSchlicht,
    },
    {
      text: 'Dieser Hackathon lohnt sich auch für alle Personen, die in ' +
        'Unternehmens&shy;rechtsabteilungen Legal Tech und Legal Operations ' +
        'aufbauen wollen. Eine super Inspiration und Lernerfahrung!',
      name: 'Bianca Neumaier',
      img: biancaNeumaier,
    },
    {
      name: 'Kirsten Rulf',
      text: 'Im Bereich LegalTech liegt für die Justiz die Chance,' +
        ' brach&shy;liegende Potenziale zu heben und effizienter zu werden.' +
        ' Wer diese Entwicklung verpasst, hat einen Wettbewerbs&shy;nachteil.',
      img: kirstenRulf,
    },
  ];

  render() {
    return (<div
      id="testimonials"
      className="h-screen relative flex justify-center items-center"
    >

      <div className={'absolute top-8 left-0 rounded-r z-10 bg-blue-12 ' +
        'text-blue-1 text-3xl px-20 py-6'}>
        What Others Say
      </div>
      <div className={'w-full h-5/6 py-4 flex justify-center ' +
        'items-center md:px-4'}>
        <div className={'block w-full h-full py-4 relative'}>

          <Swiper
            speed={300}
            className="testimonial-swiper"
            spaceBetween={10}
            slidesPerView={1.1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            centeredSlides={true}>
            {this.cards.map((testimonial, i) => {
              return <SwiperSlide key={i} className="block rounded">
                <TestimonialSwiper testimonial={testimonial} i={i}/>
              </SwiperSlide>;
            })}

          </Swiper>

        </div>
      </div>

      <Caret
        className={'caret-left'}
        onClick={() => this.props.scrollTo('#partners-page')} />
    </div>);
  }
}
