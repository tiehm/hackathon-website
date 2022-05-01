import React from 'react';

type Props = {
    img: string
    title: string
    info: string
}

export class AboutCard extends React.Component<Props, {}> {

    render () {
        return <div className="bg-red-1 rounded">
            <div>
                <img alt="" src={this.props.img} className="rounded-t " />
            </div>
            <div className="py-10 text-head-m text-center">
                {this.props.title}
            </div>
            <div className="text-md text-left px-6 xl:text-text-l text-justify">
                {this.props.info}
            </div>
        </div>
    }

}
