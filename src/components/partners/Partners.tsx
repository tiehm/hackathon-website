import React from 'react';
import cdpsLogo from '../../img/partners/cdps.png';
import disruptLogo from '../../img/partners/disrupt.png';
import eLegalLogo from '../../img/partners/elegal.png';
import legalTechDeLogo from '../../img/partners/legal_tech_init_de.svg';
import liquidLegalLogo from '../../img/partners/liquid_legal.png';
import lmuLogo from '../../img/partners/lmu.png';
import openLegalTechLogo from '../../img/partners/open_legal_tech.png';
import orgFrankfurtLogo from '../../img/partners/org_fra.png';
import orgAachen from '../../img/partners/org_aachen.svg';
import orgCologneLogo from '../../img/partners/org_cologne.png';
import orgFreiburg from '../../img/partners/org_freiburg_white.png';
import orgGiessenLogo from '../../img/partners/org_giessen.png';
import orgMannheim from '../../img/partners/org_mannheim_white.png';
import orgMarburgLogo from '../../img/partners/org_marburg.png';
import mlTechLogo from '../../img/partners/org_munich.png';
import recodeLogo from '../../img/partners/org_recode_text.png';
import orgTrierLogo from '../../img/partners/org_trier_logo_text_white.png';
import orgTuebingenLogo from '../../img/partners/org_tuebingen.png';
import tumLogo from '../../img/partners/tum.png';
import riLMU from '../../img/partners/ri_lmu.png';
import {PartnerItem} from './PartnerItem';


interface Partner {
    // the image source string to the logo of the partner
    img: string;
    // the name of the organization which is shown to the user
    name: string;
    // indicator weather the provided logo is small or big, there is no
    // exact measurement but in general any wide logo is "big" while more
    // quadratic lltLogos are "small"
    size: 'small' | 'big';
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

export class Partners extends React.Component {
  // list of all partners
  partnerList: Partner[] = [
    {
      img: recodeLogo,
      name: 'recode.law e.V.',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://recode.law/',
    },
    {
      img: orgAachen,
      name: 'Legal Tech Aachen',
      size: 'small',
      backgroundColor: 'very-light-blue',
      link: 'https://www.linkedin.com/company/legal-tech-aachen/',
    },
    {
      img: orgTrierLogo,
      name: 'Legal Tech Trier e.V.',
      size: 'small',
      backgroundColor: 'dark-blue',
      link: 'https://www.legaltechtrier.de/',
    },
    {
      img: orgFrankfurtLogo,
      name: 'LEGAL TECH LAB FRANKFURT AM MAIN E.V.',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://legaltechlab.de/',
    },
    {
      img: orgMannheim,
      name: 'ltc Mannheim e.V.',
      size: 'big',
      backgroundColor: 'dark-blue',
      link: 'https://www.ltc-mannheim.de/',
    },
    {
      img: orgMarburgLogo,
      name: 'Legal Tech Lab Marburg',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://www.legal-tech-marburg.de/',
    },
    {
      img: orgTuebingenLogo,
      name: 'Tübingen Legal Tech e.V.',
      size: 'small',
      backgroundColor: 'very-light-blue',
      link: 'https://www.tuebingenlegaltech.de/',
    },
    {
      img: openLegalTechLogo,
      name: 'Open Legal Tech e. V.',
      size: 'small',
      backgroundColor: 'very-light-blue',
      link: 'https://open-legal-tech.org/',
    },
    {
      img: orgCologneLogo,
      name: 'Legal Tech Lab Cologne e.V.',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://legaltechcologne.de/',
    },
    {
      img: mlTechLogo,
      name: 'Munich Legal Tech Student Association e.V.',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://www.ml-tech.org/',
    },
    {
      img: liquidLegalLogo,
      name: 'Liquid Legal Institute e.V.',
      size: 'small',
      backgroundColor: 'very-light-blue',
      link: 'https://www.liquid-legal-institute.com/',
    },
    {
      img: cdpsLogo,
      name: 'TUM Center for Digital Public Services',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://www.tum-cdps.de/',
    },
    {
      img: eLegalLogo,
      name: 'eLEGAL e.V.',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://www.elegal.technology/',
    },
    {
      img: disruptLogo,
      name: 'disrUPt law Heidelberg e.V.',
      size: 'small',
      backgroundColor: 'dark-blue',
      link: 'https://disrupt-law.org/',
    },
    {
      img: orgFreiburg,
      name: 'fruit - Freiburg Recht und IT',
      size: 'big',
      backgroundColor: 'dark-blue',
      link: 'https://freiburg-recht-und-it.de/',
    },
    {
      img: legalTechDeLogo,
      name: 'Legal Tech Verband Deutschland e.V.',
      size: 'big',
      backgroundColor: 'very-light-blue',
      link: 'https://www.legaltechverband.de/',
    },
    {
      img: orgGiessenLogo,
      name: 'JUST Legal Tech e.V.',
      size: 'big',
      backgroundColor: 'light-blue',
      link: 'https://www.just-legaltech.de/',
    },
    {
      img: tumLogo,
      name: 'Technische Universität München',
      size: 'small',
      backgroundColor: 'very-light-blue',
      link: 'https://www.tum.de/',
    },
    {
      img: lmuLogo,
      name: 'Ludwig-Maximilians-Universität München',
      size: 'small',
      backgroundColor: 'light-blue',
      link: 'https://www.lmu.de/de/index.html',
    },
    {
      img: riLMU,
      name: 'LMU RIZ',
      size: 'small',
      backgroundColor: 'very-light-blue',
      link: 'https://www.jura.uni-muenchen.de/fakultaet/riz_neu/index.html',
    },
  ];

  randomizedPartnerList(): Partner[] {
    return [
      // priority partners should always come first and as such are
      // always in the beginning of the list
      ...this.partnerList.filter((p) => p.priorityPick),
      // there are better ways to make sure that the array is properly
      // sorted than using Math.random() with .sort(), however for
      // this application this is random and efficient enough
      ...this.partnerList.filter((p) => !p.priorityPick)
          .sort(() => 0.5 - Math.random()),
    ];
  }

  render() {
    return <div id="partners-page" className={'relative flex z-10'}>
      {/* container for the left aligned, colored sidebar */}
      <div className={'items-center flex h-full absolute -left-2 mt-auto'}>
        {/* left aligned, colored sidebar */}
        <div className={'h-4/5 bg-red-3 w-12 rounded'}></div>
      </div>

      <div className={'absolute top-8 left-0 rounded-r z-10 bg-blue-12 ' +
          'text-blue-1 text-3xl px-20 py-6'}>
                Partners
      </div>

      <div className={'h-full flex justify-center items-center w-4/5 ml-auto ' +
          'mr-2 pt-52 z-10 flex-grow'}>

        <div className={'grid grid-flow-row-dense h-full gap-3 w-4/5 ml-auto ' +
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
