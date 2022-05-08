import classNames from 'classnames';
import React from 'react';
import './PartnerItem.css';

type Props = {
    img: string
    name: string
    size: 'big' | 'small'
    backgroundColor: 'dark-blue' | 'light-blue' | 'very-light-blue'
    link: string
}

export class PartnerItem extends React.Component<Props, any> {

    get tailwindGridSpanClass(): string {
        switch (this.props.size) {
            case 'big':
                return 'col-span-2'
            default:
                return ''
        }
    }

    get tailwindBackgroundColorBorderClass(): string {
        switch (this.props.backgroundColor) {
            case 'dark-blue':
                return 'bg-blue-12 border-blue-12'
            case 'light-blue':
                return 'bg-blue-4 border-blue-12'
            case 'very-light-blue':
                return 'bg-blue-1 border-blue-4'
            default:
                return 'bg-blue-4 border-blue-12'
        }
    }


    render () {
        return <a href={this.props.link} rel="noreferrer" target="_blank" className={classNames(
            'partnerItem overflow-hidden p-2' ,
            'border-2 rounded h-24 flex justify-center',
            'items-center relative',
            this.tailwindBackgroundColorBorderClass,
            this.tailwindGridSpanClass
            )}>
            <img src={this.props.img}
                 className="h-full w-full object-contain"
                 alt=""/>
            <div className="absolute w-full h-full bg-blue-4 opacity-0 transition-opacity flex items-center justify-center text-text-l text-center text-blue-12 cursor-pointer font-code">
                {this.props.name}
            </div>
        </a>;
    }

}
