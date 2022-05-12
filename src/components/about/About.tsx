import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './About.css';
import {Caret} from '../Caret';
import umfassendImg from '../../img/umfassend.png';
import nonProfitImg from '../../img/nonProfit.png';
import betreuungImg from '../../img/betreuung.png';

import 'swiper/css';
import 'swiper/css/navigation';
import {AboutCard} from './AboutCard';
import {SwiperCard} from './SwiperCard';

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

// About is the entrypoint for the about page (path: /about)
export class About extends React.Component<Props, {}> {
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
    return <div
      id="about-page"
      className="h-screen relative flex justify-center items-center"
    >
      <div className={'absolute top-4 right-0 rounded-l z-10 bg-blue-12 ' +
          'text-blue-1 text-3xl px-16 py-4 ' +
          'md:top-2 md:px-12 md:py-6 xl:top-8 xl:px-20'}>
                About LLT
      </div>
      <div className={'w-full h-5/6 bg-blue-3 py-4 flex justify-center ' +
          'items-center md:px-4'}>
        <div className={'block w-full h-full py-4 md:hidden'}>
          <Swiper
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={1.1}
            centeredSlides={true}>

            {this.cards.map((card, i) => {
              return <SwiperSlide key={i} className="block rounded">
                <SwiperCard
                  img={card.img}
                  title={card.title}
                  info={card.description}
                />
              </SwiperSlide>;
            })}

          </Swiper>

        </div>

        <div className={'hidden md:grid gap-4 grid-cols-3 h-full w-full py-4 ' +
            'xl:w-4/5 xl:mx-auto xl:h-4/5'}>

          {this.cards.map((card, i) => {
            return <AboutCard
              key={i}
              img={card.img}
              title={card.title}
              info={card.description}
            />;
          })}

        </div>
      </div>

      <Caret
        id={'aboutCaret'}
        className={'caret-right hidden z-10 850-h:block'}
        onClick={() => this.props.scrollTo('#partners-page')} />

    </div>;
  }
}
