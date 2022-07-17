import React from 'react';

type Props = {
    img: string
    title: string
    info: string
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
      <div className={'py-10 text-head-m text-center'}>
        {this.props.title}
      </div>
      <div className={'text-md text-left p-6 xl:text-text-l text-left ' +
          '850-h:text-justify'}>
        {this.props.info}
      </div>
    </div>;
  }
}
