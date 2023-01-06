import classNames from 'classnames';
import React from 'react';
import {Footer} from '../components/footer/Footer';

export class Join extends React.Component {
  render() {
    return (<div className="overflow-x-hidden">
      <div className={classNames('h-screen flex bg-red-3 w-full' +
        ' justify-center items-center mb-10')}>
        <div className="select-none text-center text-blue-12">
          <div className={classNames('font-medium mb-4 lxs:mb-0 text-xl' +
            ' sm:text-2xl md:text-5xl lg:text-5xl mx-auto w-2/3')}>
            Die Anmeldung für das Jahr 2023 ist geschlossen;
            die Sieger:innen werden in Kürze bekanntgegeben!
          </div>
        </div>
      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
