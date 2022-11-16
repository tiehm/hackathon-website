import classNames from 'classnames';
import {Testimonial} from './Testimonials';
import React from 'react';

interface Props {
  testimonial: Testimonial;
  i: number;
}

export class TestimonialSwiper extends React.Component<Props, {}> {
  render() {
    return <div className="w-3/4 md:w-2/3 h-full mx-auto ">
      <div className={'w-full my-20 relative h-full flex' +
        ' flex-col justify-center align-middle items-center'}>
        <div className={classNames('absolute xl:top-20' +
          ' sm:top-1/4 -translate-y-1/2' +
          ' xl:translate-y-0 xl:h-56 xl:w-56 md:h-40' +
          ' md:w-40 w-28 h-28 ',
          this.props.i % 2 ?
          'xl:-left-28 md:-left-20' :
          'xl:-right-28 md:-right-20',
          this.props.testimonial.isTooBig ? 'top-[12%]' : 'top-[17%]')}>
          <div className={classNames('bg-contain bg-brackets h-full' +
            ' xl:h-56 xl:w-56 md:h-40' +
            ' md:w-40 w-28 h-28 bg-no-repeat bg-center flex' +
            ' justify-center align-center items-center',
            this.props.i % 2 ?
            'xl:-left-28 md:-left-20' :
            'xl:-right-28 md:-right-20')}>
            <img
              src={this.props.testimonial.img}
              className={'h-auto max-h-[80%] max-w-[80%] rounded'}
              alt={this.props.testimonial.name} />
          </div>
          { this.props.testimonial.pictureSource ?
            <span className={'block text-xs leading-3'}>
              Picture: © {this.props.testimonial.pictureSource}
            </span> :
            null }
        </div>
        <div className={classNames('rounded bg-red-3 w-full sm:h-1/2' +
          ' flex' +
          ' justify-center align-center items-center',
          this.props.testimonial.isTooBig ? 'h-3/4' : 'h-2/3')}>
          <div className={'md:w-3/4 w-11/12 text-center md:pt-0' +
            ' pt-4'}>
            <div className={classNames('text-left mx-auto w-10/12' +
              ' testimonial-text',
              this.props.testimonial.isTooBig ?
              'text-text-s md:text-text-m xl:text-head-s 2xl:text-head-m' :
              'text-text-m md:text-head-s xl:text-head-m 2xl:text-head-l')}
            dangerouslySetInnerHTML={{__html: this.props.testimonial.text}} >

            </div>
            <div className={classNames('text-right mt-4')}>
              <div className={classNames(
                this.props.testimonial.isTooBig ?
                'text-text-s md:text-text-m xl:text-text-lg' :
                'text-text-s md:text-text-m xl:text-head-s')}>
                - {this.props.testimonial.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
