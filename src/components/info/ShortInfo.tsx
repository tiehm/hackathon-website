import React from 'react';
import { CustomLink } from '../navigation/CustomLink';

export class ShortInfo extends React.Component {

    render () {
        return <div className="details text-blue-12 font-semi-bold text-text-l mt-16 lg:w-8/12 md:ml-auto md:text-head-m lg:text-head-m md:font-regular tabletL:w-9/12 2xl:text-head-l">

            <div className="mb-4 text-justify">
                02.01.23 - 08.01.23. Deutschlands größter Legal Tech Hackathon von und für Studierende. Offen und inklusiv. Non-Profit. Trotzdem € 2.500,- Preisgeld. Remote. Und das Beste: Nur dein Interesse genügt, wir bringen dir alles bei!
            </div>

            <CustomLink to="/event" className="bg-blue-12 text-blue-1 rounded text-center px-8 py-5 cursor-pointer md:px-12 md:py-8 md:text-head-m ml-auto w-fit block mt-12" >
                Mehr erfahren!
            </CustomLink>

        </div>
    }

}
