import React from 'react';

type Props = {
    img: string
    title: string
    info: string
    details: string
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
      <div className={'pt-3 850-h:pt-6 text-head-m'}>
        {this.props.title}
      </div>
      <div className={'text-text-s 750-h:text-text-subtitle' +
        ' 850-h:text-text-l text-left px-6 pt-2 850-h:text-justify'}
      dangerouslySetInnerHTML={{__html:
               `${this.props.info}<br />${this.props.details}`}}
      >
      </div>
    </div>;
  }
}
