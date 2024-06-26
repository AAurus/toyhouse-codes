import React from 'react';

export class Name extends React.Component {

    render() {

        let first = this.props.name[0];
        let rest = this.props.name.substring(1);

        return  <>
                    <div id="name-wrapper">
                        <span class="color-text-accent" id="name-initial-highlight">{first}</span>{rest}
                    </div>
                    <div class="mx-5" id="name-title">
                        {this.props.title}
                    </div>
                </>;

    }

}