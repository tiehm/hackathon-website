import classNames from 'classnames';
import React from 'react';
import linkedIn from '../../img/icons/linkedIn.png';
import mailIcon from '../../img/icons/mail.svg';
import './TeamCard.css';

type Props = {
    name: string
    details: string
    email: string
    linkedIn?: string
    shortDesc: string
    backgroundClass: string
}

type State = {
    showDetails: boolean
}

export class TeamCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.cardClick = this.cardClick.bind(this);
  }

  state = {
    showDetails: false,
  };

  cardClick() {
    // we only want click actions on mobile devices
    if (window.innerWidth > 768) {
      return;
    }
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  render() {
    return <div className="bg-blue-2 rounded relative select-none">
      <div className={classNames('absolute h-full w-full bg-blue-2 rounded' +
                ' tabletL:hover:opacity-95 transition-opacity flex' +
                ' flex-col justify-center items-center p-4',
                this.state.showDetails ?
                  'opacity-95' :
                  'opacity-0',
      )} onClick={this.cardClick}>
        <div className="text-blue-12 text-justify">
          {this.props.details}
        </div>
        <div className={classNames(
            'flex items-center mx-auto w-3/5 mt-4',
            // eslint-disable-next-line max-len
            {'pointer-events-none md:pointer-events-auto': !this.state.showDetails},
            this.props.linkedIn ?
              'justify-between' :
              'justify-center')}>
          <a
            href={'mailto:' + this.props.email}
            target="_blank"
            rel="noreferrer">
            <img className="h-14 w-auto" src={mailIcon} alt=""/>
          </a>
          {this.props.linkedIn &&
                        <a
                          href={this.props.linkedIn}
                          target="_blank"
                          rel="noreferrer">
                          <img className="h-12 w-auto" src={linkedIn} alt=""/>
                        </a>
          }
        </div>
      </div>
      <div className={'w-full h-60 rounded-t ' + this.props.backgroundClass}>

      </div>
      <div className="text-center p-4 bg-blue-2 bg-opacity-10 rounded-b">
        <div className="font-semi-bold">
          {this.props.name}
        </div>
        <div>
          {this.props.shortDesc}
        </div>
      </div>
    </div>;
  }
}
