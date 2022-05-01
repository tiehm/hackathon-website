import React from 'react';

type Props = {
    className: string
}

export class ContactDetails extends React.Component<Props, any> {

    render () {
        return <div className={this.props.className}>
            <div className="text-head-m font-medium mb-4">
                Contact
            </div>
            <div className="font-semi-bold text-text-l mb-2">
                Sebastian Nagl
            </div>
            <div className="font-semi-bold text-text-l">
                hello@legallovestech.de
            </div>
        </div>
    }

}
