import classNames from 'classnames';
import React from 'react';
import downCaret from '../img/icons/down-caret.svg';

type Props = {
    className: string
    onClick: () => void
    id?: string
}

export class Caret extends React.Component<Props, {}> {
  render() {
    return <img id={this.props.id} src={downCaret}
      alt=""
      className={classNames(
          'animate-bounce hover:animate-none absolute bottom-7' +
          ' cursor-pointer w-12 hover:scale-110 transition-all duration-200',
          this.props.className)}
      onClick={this.props.onClick}/>;
  }
}
