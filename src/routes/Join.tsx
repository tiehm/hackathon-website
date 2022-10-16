import {Widget} from '@typeform/embed-react';
import React from 'react';
import {Footer} from '../components/footer/Footer';

export class Join extends React.Component {
  render() {
    return (<div className={'overflow-x-hidden'}>
      <div className={'h-screen flex bg-red-3 w-full justify-center ' +
          'items-center mb-10 align-middle'}>
        <div className={'container lg:max-w-[80%] h-[60%] px-4 lg:px-0'}>
          <Widget
            id={'QemQcmL4'}
            style={{width: '100%', height: '100%'}} />
        </div>
      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
