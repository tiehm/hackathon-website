import React from 'react';
import { SwiperSlide } from 'swiper/react';

type Props = {
    img: string
    title: string
    info: string
}

export class SwiperCard extends React.Component<Props, {}> {

    render () {
        return  <SwiperSlide className="block rounded">
            <div>
                <img alt="" src={this.props.img} className="rounded-t" />
            </div>
            <div className="py-10 text-head-m">
                {this.props.title}
            </div>
            <div className="text-text-l text-left px-6">
                {this.props.info}
            </div>
        </SwiperSlide>
    }

}
