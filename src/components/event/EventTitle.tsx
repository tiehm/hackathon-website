import React from 'react';
import './EventTitle.css';

export class EventTitle extends React.Component {
  render() {
    return <div
      id={'event-hearts'}
      className={'text-head-m font-medium text-blue-1 bg-blue-12 rounded-r ' +
            'py-6 pl-6 pr-14 w-fit relative'}>
            Anmeldung und Ablauf
    </div>;
  }
}
