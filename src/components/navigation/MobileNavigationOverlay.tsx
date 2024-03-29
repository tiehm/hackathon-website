import React from 'react';
import {CustomLink} from './CustomLink';

type Props = {
  close: () => void;
};

export class MobileNavigationOverlay extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.leaveModal = this.leaveModal.bind(this);
  }

  leaveModal() {
    this.props.close();
  }

  render() {
    return <div id="nav-modal"
      className="fixed w-full h-full bg-white z-50">

      <div className={'h-full flex flex-col justify-center items-center ' +
          'gap-6 text-blue-12 text-head-l'}>
        <CustomLink
          to={'/'}
          onClick={this.leaveModal}
          className={'hover:text-blue-11'}
        >
            Home
        </CustomLink>
        <CustomLink
          to={'/event'}
          onClick={this.leaveModal}
          className={'hover:text-blue-11'}
        >
            Event
        </CustomLink>
        <CustomLink
          to={'/team'}
          onClick={this.leaveModal}
          className={'hover:text-blue-11'}
        >
            Team
        </CustomLink>
        <CustomLink
          to={'/jury'}
          onClick={this.leaveModal}
          className={'hover:text-blue-11'}
        >
          Jury
        </CustomLink>
        <CustomLink
          to={'/result'}
          onClick={this.leaveModal}
          className={'hover:text-blue-11'}
        >
          Recap LLT &apos;23
        </CustomLink>
        <CustomLink
          to={'/join'}
          onClick={this.leaveModal}
          className={'text-blue-11'}
        >
            Mitmachen
        </CustomLink>
      </div>

    </div>;
  }
}
