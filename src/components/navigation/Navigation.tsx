import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {CustomLink} from './CustomLink';
import coloredLogo from '../../img/lltLogos/logo-colored.svg';
import {MenuButton} from './MenuButton';
import {MobileNavigationOverlay} from './MobileNavigationOverlay';


export function Navigation() {
  const [isMobileNavigationOpened, setIsMobileNavigationOpened] =
          useState(false);

  // toggleNav toggles the mobile navigation modal (MobileNavigationOverlay)
  const toggleNav = () => {
    // we need to toggle the y overflow on the body for the navigation
    // modal so the modal is not only full screen but also non-scrollable
    document.body.classList.toggle('overflow-y-hidden');
    document.getElementById('nav-button')?.classList.toggle('-menu-open');
    setIsMobileNavigationOpened(!isMobileNavigationOpened);
  };

  const isHomepage = () => {
    const loc = useLocation();
    return loc.pathname === '/';
  };

  return <nav className={'bg-blue-1 text-text-l absolute w-full'}>
    {isMobileNavigationOpened && <MobileNavigationOverlay close={toggleNav}/>}
    <div className={'container flex flex-wrap justify-between items-center ' +
      'mx-auto tabletL:w-4/5 items-stretch h-full'}>

      <div className={'p-4'}>
        <CustomLink to="/">
          <img
            src={coloredLogo}
            alt={'Logo'}
            className={'w-16 tabletL:w-20 xl:w-24 ml-2'}/>
        </CustomLink>
      </div>

      <div className={'inline-flex p-2 ml-3 tabletL:hidden'}>
        <MenuButton
          openedMenu={isMobileNavigationOpened}
          toggleNav={toggleNav}/>
      </div>

      <div className={'hidden w-full ml-4 flex-row gap-8 w-auto ' +
        'justify-center tabletL:flex 2xl:text-head-s items-stretch'}>
        <CustomLink
          to={'/'}
          className={'border-b-2 hover:text-blue-11'}
        >
          Home
        </CustomLink>
        <CustomLink
          to={'/event'}
          className={'border-b-2 hover:text-blue-11'}
        >
          Event
        </CustomLink>
        <CustomLink
          to={'/team'}
          className={'border-b-2 hover:text-blue-11'}
        >
          Team
        </CustomLink>
        <CustomLink
          to={'/jury'}
          className={'border-b-2 hover:text-blue-11'}
        >
          Jury
        </CustomLink>
        <CustomLink
          to={'/result'}
          className={'border-b-2 hover:text-blue-11'}
        >
          Recap LLT &apos;23
        </CustomLink>
        <CustomLink
          to={'/join'}
          className={'border-b-2 font-medium text-blue-2'}
          outerClassName="bg-blue-12 px-2"
          isJoinButton={true}
        >
          Mitmachen
        </CustomLink>
      </div>
    </div>
    {isHomepage() && <Link to="/result"
      className={'block bg-yellow-400 text-center' +
        ' text-yellow-900 py-2 text-sm md:text-lg z-50'}>
      <span className={'font-bold'}>
          Hier geht‘s zum Gewinner-Team des Legal Loves Tech 2023
      </span>
    </Link>}
  </nav>;
}
