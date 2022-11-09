import React from 'react';
import ltv from '../../img/mediapartners/legal_tech_verzeichnis.png';
import {PartnerItem} from './PartnerItem';


interface Partner {
    // the image source string to the logo of the partner
    img: string;
    // the name of the organization which is shown to the user
    name: string;
    // indicator weather the provided logo is small or big, there is no
    // exact measurement but in general any wide logo is "big" while more
    // quadratic lltLogos are "small"
    size: 'small' | 'big' | 'very-big' | 'cube';
    // depending on the logo the background color can be chosen, light lltLogos
    // are probably best on a dark blue background while very dark lltLogos are
    // the best on a very light blue or light blue
    backgroundColor: 'dark-blue' | 'light-blue' | 'very-light-blue';
    // link to the website of the partner organization
    link: string
    // indicates that the partner is priority and should always be somewhere
    // around the top
    priorityPick?: boolean;
}

export class MediaPartners extends React.Component {
  // list of all partners
  partnerList: Partner[] = [

    {
      img: ltv,
      name: 'Legal Tech Verzeichnis',
      size: 'big',
      backgroundColor: 'very-light-blue',
      link: 'https://legal-tech-verzeichnis.de/',
    },
  ];

  randomizedPartnerList(): Partner[] {
    return this.partnerList;
    // return [
    //   // priority partners should always come first and as such are
    //   // always in the beginning of the list
    //   ...this.partnerList.filter((p) => p.priorityPick),
    //   // there are better ways to make sure that the array is properly
    //   // sorted than using Math.random() with .sort(), however for
    //   // this application this is random and efficient enough
    //   ...this.partnerList.filter((p) => !p.priorityPick)
    //       .sort(() => 0.5 - Math.random()),
    // ];
  }

  render() {
    return <div id="media-partners-page" className={'relative flex z-10'}>
      {/* container for the left aligned, colored sidebar */}
      <div className={'items-center flex h-full absolute -left-2 mt-auto'}>
        {/* left aligned, colored sidebar */}
        <div className={'h-4/5 bg-red-3 w-12 rounded'}></div>
      </div>

      <div className={'absolute top-8 right-0 rounded-l z-10 bg-blue-12 ' +
          'text-blue-1 text-3xl px-20 py-6'}>
                Media Partners
      </div>

      <div className={'h-full flex justify-center items-center w-4/5 ml-auto ' +
          'mr-2 pt-52 z-10 flex-grow'}>

        <div className={'grid grid-flow-row-dense xl:grid-flow-auto h-full' +
          ' gap-3 w-4/5' +
          ' ml-auto ' +
            'mr-4 justify-center items-center grid-cols-3 md:grid-cols-4 ' +
            'lg:grid-cols-6 lg:w-11/12 xl:grid-cols-7 '}>

          {this.randomizedPartnerList().map((partner, index) =>
            <PartnerItem
              key={index}
              img={partner.img}
              name={partner.name}
              size={partner.size}
              backgroundColor={partner.backgroundColor}
              link={partner.link}
            />,
          )}

        </div>

      </div>
    </div>;
  }
}
