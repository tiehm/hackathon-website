import React from 'react';
import betreuungImg from '../../img/betreuung.png';
import nonProfitImg from '../../img/nonProfit.png';
import umfassendImg from '../../img/umfassend.png';
import {Caret} from '../Caret';
import {Swiper, SwiperSlide} from 'swiper/react';

type Props = {
    scrollTo: (selector: string) => void
}

type Card = {
    // title of the card
    title: string
    // general information displayed about the card
    description: string
    // the image which should be shown for the card
    img: string
}

export class Testimonials extends React.Component<Props, {}> {
  cards: Card[] = [
    {
      title: 'Umfassend',
      description: 'Eine Kooperation sämtlicher studentischen Legal' +
                ' Tech Initiativen Deutschlands.',
      img: umfassendImg,
    },
    {
      title: 'Non Profit',
      description: 'Ein standortübergreifender Zusammenschluss von ' +
                'Universitäten und Non‑Profit‑Organisationen.',
      img: nonProfitImg,
    },
    {
      title: 'Betreuung',
      description: 'Betreuung und Unterricht durch führende ' +
                'Expert:innen und Dozierende aus den Bereichen ' +
                'Start‑Up, Rechtswissenschaften und Technik.',
      img: betreuungImg,
    },
  ];

  render() {
    return (<div
      id="testimonials"
      className="h-screen relative flex justify-center items-center bg-blue-3"
    >

      <div className={'items-center flex h-full absolute -left-2 mt-auto'}>
        {/* left aligned, colored sidebar */}
        <div className={'h-4/5 bg-red-3 w-12 rounded'}></div>
      </div>

      <div className={'absolute top-8 left-0 rounded-r z-10 bg-blue-12 ' +
            'text-blue-1 text-3xl px-20 py-6'}>
            What Others Say
      </div>
      <div className={'w-full h-5/6 bg-blue-3 py-4 flex justify-center ' +
            'items-center md:px-4'}>
        <div className={'block w-full h-full py-4'}>
          <Swiper
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={1.1}
            centeredSlides={true}>
            {this.cards.map((card, i) => {
              return <SwiperSlide key={i} className="block rounded">
                <div className="w-2/3">
                  avc
                </div>
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
