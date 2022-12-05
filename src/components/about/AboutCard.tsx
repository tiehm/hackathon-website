import React from 'react';

type Props = {
  img: string
  title: string
  info: string
  details: string
}

export class AboutCard extends React.Component<Props, {}> {
  render() {
    return <div className={'bg-red-1 rounded'}>
      <div>
        <img
          alt={this.props.title}
          src={this.props.img}
          className={'rounded-t'}
        />
      </div>
      <div className={'pt-10 text-head-m text-center'}>
        {this.props.title}
      </div>
      <div className={'text-text-subtitle md-lg:text-text-s-m lg:text-text-m' +
        ' text-left p-6 pb-8' +
        ' 2xl:text-text-l text-center'}
      dangerouslySetInnerHTML={{__html:
          `${this.props.info}<br />${this.props.details}`}}>
      </div>
    </div>;
  }
}
