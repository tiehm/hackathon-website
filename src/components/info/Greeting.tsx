import React from 'react';
import './Greeting.css'

export class Greeting extends React.Component {

    render () {
        return <div className="text-left relative mb-10 700-h:mt-0 mt-[5%] md:mt-5 lg:mt-10 wd-10/12 xs:w-10/12 lxs:w-8/12 sm:w-7/12 md:w-8/12 lg:w-7/12 xl:w-1/2 2xl:w-5/12">

            {/* the container div is just used for placing the hearts on the
             background, without if it's nearly impossible to have a
              somewhat responsive placement of the 3 hearts */}
            <div className="pr-10">

                <div id="big-heart-background" className="w-full h-full absolute fadeIn delay-3"></div>
                <div id="medium-heart-background" className="w-full h-full absolute fadeIn delay-2"></div>
                <div id="small-heart-background" className="w-full h-full absolute fadeIn delay-1"></div>

                <div className="font-medium text-blue-12 text-4xl text-left tabletL:pl-10 lg:text-7xl">
                    Legal Tech
                </div>

                <div className="700-h:-mt-2 leading-none font-pen font-medium text-red-10 text-center -ml-12 text-8xl lg:text-8xl xl:text-10xl">
                    loves
                </div>

                <div className="700-h:-mt-2 leading-4 relative text-8xl font-medium text-blue-12 text-right tabletL:pr-10 lg:text-10xl">
                    you!
                </div>

            </div>

        </div>
    }

}
