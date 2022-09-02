import React from 'react';
import {About} from '../components/about/About';
import {Footer} from '../components/footer/Footer';
import {Info} from '../components/info/Info';
import {Partners} from '../components/partners/Partners';
import {Testimonials} from '../components/testimonials/Testimonials';

// Home is the entrypoint for the first page (path: /)
export class Home extends React.Component {
  scrollTo(selector: string): undefined {
    // https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery

    const nextElement = document.querySelector(selector) as HTMLElement;
    if (!nextElement) {
      // no element found, developer at fault
      return;
    }

    window.scroll({
      behavior: 'smooth', left: 0, top: nextElement.offsetTop,
    });
  }

  render() {
    return <div className={`App overflow-x-hidden`}>
      <Info scrollTo={this.scrollTo} />
      <About scrollTo={this.scrollTo} />
      <Testimonials scrollTo={this.scrollTo} />
      <Partners />
      <Footer backgroundColor={'blue'} />
    </div>;
  }
}

