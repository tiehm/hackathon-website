import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './About.css'
import { Caret } from '../Caret';
import umfassendImg from '../../img/umfassend.png'
import nonProfitImg from '../../img/nonProfit.png'
import betreuungImg from '../../img/betreuung.png'

import "swiper/css";
import "swiper/css/navigation";
import { AboutCard } from './AboutCard';
import { SwiperCard } from './SwiperCard';

type Props = {
    scrollTo: (selector: string) => void
}

// About is the entrypoint for the about page (path: /about)
export class About extends React.Component<Props, {}> {

    render () {
        return <div id="about-page" className="h-screen relative flex justify-center items-center" >
            <div className="absolute top-4 right-0 rounded-l z-10 bg-blue-12 text-blue-1 text-3xl px-16 py-4 md:top-2 md:px-12 md:py-6 xl:top-8 xl:px-20">
                About LLT
            </div>
            <div className="w-full h-5/6 bg-blue-3 py-4 flex justify-center items-center md:px-4">
                <div className="block w-full h-full py-4 md:hidden">
                    <Swiper className="mySwiper" spaceBetween={10} slidesPerView={1.1} centeredSlides={true}>
                        <SwiperSlide className="block rounded">
                            <SwiperCard img={umfassendImg} title="Umfassend" info="Eine Kooperation sämtlicher studentischen Legal Tech Initiativen Deutschlands." />
                        </SwiperSlide>

                        <SwiperSlide className="block rounded">
                            <SwiperCard img={nonProfitImg} title="Non Profit" info="Ein standortübergreifender Zusammenschluss von Universitäten und Non-Profit-Organisationen." />
                        </SwiperSlide>

                        <SwiperSlide className="block rounded">
                            <SwiperCard img={betreuungImg} title="Betreuung" info="Betreuung und Unterricht durch führende Expert:innen und Dozierende aus den Bereichen Start-Up, Rechtswissenschaften und Technik." />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="hidden md:grid gap-4 grid-cols-3 h-full w-full py-4 xl:w-4/5 xl:mx-auto xl:h-4/5">

                    <AboutCard img={umfassendImg} title="Umfassend" info="Eine Kooperation sämtlicher studentischen Legal Tech Initiativen Deutschlands." />

                    <AboutCard img={nonProfitImg} title="Non Profit" info="Ein standortübergreifender Zusammenschluss von Universitäten und Non-Profit-Organisationen." />

                    <AboutCard img={betreuungImg} title="Betreuung" info="Betreuung und Unterricht durch führende Expert:innen und Dozierende aus den Bereichen Start-Up, Rechtswissenschaften und Technik." />

                </div>
            </div>


            <Caret className="caret-right z-10" onClick={() => this.props.scrollTo('#partners-page')} />
        </div>
    }

}
