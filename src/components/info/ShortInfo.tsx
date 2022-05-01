import React from 'react';
import { CustomLink } from '../navigation/CustomLink';

export class ShortInfo extends React.Component {

    render () {
        return <div className="font-semi-bold mt-[15%] md:mt-10 md:text-head-m md:font-regular md:ml-auto tabletL:w-9/12 lg:w-8/12 lg:text-head-m 2xl:text-head-l">

            <div className="mb-4 text-justify text-blue-12 text-text-l lg:text-3xl lg:mt-10">
                02.01.23 - 08.01.23. Deutschlands größter Legal Tech Hackathon von und für Studierende. Offen und inklusiv. Non-Profit. Trotzdem € 2.500,- Preisgeld. Remote. Und das Beste: Nur dein Interesse genügt, wir bringen dir alles bei!
            </div>

            <CustomLink to="/event" className="bg-blue-12 text-blue-1 rounded text-center px-8 py-5 mt-[15%] md:mt-0 lg:mt-14 ml-auto w-fit block cursor-pointer md:px-12 md:py-8 md:text-head-m" >
                Mehr erfahren!
            </CustomLink>

        </div>
    }

}
