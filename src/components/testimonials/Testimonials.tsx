import React from 'react';
import bernhardWaltl from '../../img/BernhardWaltl.jpg';
import dirkHartung from '../../img/DirkHartung.jpg';
import heckmann from '../../img/Heckmann.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Testimonials.css';
import {Navigation} from 'swiper';
import {TestimonialSwiper} from './TestimonialSwiper';

type Props = {
    scrollTo: (selector: string) => void
}

export interface Testimonial {
  img: string;
  name: string;
  text: string;
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
    },
    {
      img: dirkHartung,
      text: 'Ein großer Wettbewerb bei dem es auf gute Ideen und deren' +
        ' technische Umsetzung ankommt, ist genau das anspruchsvolle' +
        ' Ausbildungsformat, das wir im Legal Tech Bereich brauchen',
      name: 'Dirk Hartung',
    },
    {
      text: 'Der LegalLovesTech Hackathon bietet die ideale Plattform für' +
        ' angehende Jurist*innen, Informatiker*innen und Interessierte, um' +
        ' gemeinsam innovative Einsatzmöglichkeiten von IT in der' +
        ' Rechtsanwendung zu entdecken, den Grundstein für wettbewerbsfähige' +
        ' technische Lösungen zu entwickeln und damit die Zukunft der' +
        ' rechtsanwendenden Berufe mitzugestalten.',
      name: 'Prof. Dr. Dirk Heckmann',
      img: heckmann,
      isTooBig: true,
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
            className="testimonial-swiper"
            spaceBetween={10}
            slidesPerView={1.1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            centeredSlides={true}>
            {this.cards.map((testimonial, i) => {
              return <SwiperSlide key={i} className="block rounded">
                <TestimonialSwiper testimonial={testimonial} i={i} />
              </SwiperSlide>;
            })}

          </Swiper>

        </div>
      </div>

    </div>);
  }
}
