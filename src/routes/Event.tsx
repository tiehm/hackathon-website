import React from 'react';
import {EventInformationList} from '../components/event/EventInformationList';
import {EventTitle} from '../components/event/EventTitle';
import {Footer} from '../components/footer/Footer';

// entrypoint for the event page (path: /event)
export class Event extends React.Component {
  render() {
    return <div className={'overflow-x-hidden min-h-screen flex flex-col'}>

      <div className={'flex flex-col grow pt-8 grow mb-6 lg:mb-0 mt-20 ' +
          'tabletL:mt-24 xl:mt-28 relative'}>

        <EventTitle/>

        {/* container just for the right aligned, colored sidebar */}
        <div className={'items-center flex h-full absolute -right-4 mt-auto'}>
          {/* right, colored sidebar */}
          <div className={'h-4/6 bg-red-3 w-12 bg-blue-12 rounded'}></div>
        </div>

        <div className={'py-6 pl-8 pr-10 md:mt-10 tabletL:px-12 ' +
            'lg:w-4/5 lg:mx-auto'}>

          <EventInformationList/>

          <div className={'bg-blue-3 font-semi-bold text-text-caption ' +
              'rounded border w-fit py-6 px-8 border-blue-12 uppercase ' +
              'ml-auto mt-16'}>
              Anmeldung möglich ab 01.10.2022
          </div>

        </div>

      </div>

      <Footer backgroundColor={'red'}/>

    </div>;
  }
}
