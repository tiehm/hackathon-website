import React from 'react';

type Props = {
    img: string
    title: string
    info: string
}

export class SwiperCard extends React.Component<Props, {}> {
  render() {
    return <div>
      <div>
        <img
          alt={this.props.title}
          src={this.props.img}
          className={'rounded-t'}
        />
      </div>
      <div className={'py-10 text-head-m'}>
        {this.props.title}
      </div>
      <div className={'text-text-l text-left px-6 850-h:text-justify'}>
        {this.props.info}
      </div>
    </div>;
  }
}
