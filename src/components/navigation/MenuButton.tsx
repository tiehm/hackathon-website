import classNames from 'classnames';
import React from 'react';
import './MenuButton.css';

type Props = {
    openedMenu: boolean
    toggleNav: () => void
}

// MenuButton is the mobile hamburger menu button for opening and closing
// the navigation modal
// svg / animation adapted from https://codepen.io/staffanmowitz/pen/KoKgmo
export class MenuButton extends React.Component<Props, { }> {
  constructor(props: Props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.props.toggleNav();
  }

  render() {
    return <div id="nav-button"
      className={classNames(
          'button cursor-pointer p-1 z-50 flex justify-center items-center',
          {'-menu-open': this.props.openedMenu})}
      onClick={this.toggleNav}>
      <svg width="30px"
        height="40px"
        viewBox="0 0 30 40"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <line x1="0"
            y1="10"
            x2="40"
            y2="10"
            strokeWidth="1"/>
          <line x1="0"
            y1="20"
            x2="40"
            y2="20"
            strokeWidth="1"/>
          <line x1="0"
            y1="30"
            x2="40"
            y2="30"
            strokeWidth="1"/>
        </g>

        <g>
          <line x1="0" y1="20" x2="30" y2="20" strokeWidth="1"/>
          <line x1="0" y1="20" x2="30" y2="20" strokeWidth="1"/>
        </g>
      </svg>
    </div>;
  }
}
