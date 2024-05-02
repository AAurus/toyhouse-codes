import React from 'react';
import ReactDOM from 'react-dom/client';

export class Name extends React.Component {

    render() {

        let first = this.props.name[0];
        let rest = this.props.name.substring(1);

        return  <>
                    <div id="name-wrapper">
                        <span class="color-accent-text" id="name-initial-highlight">{first}</span>{rest}
                    </div>
                    <div class="mx-5" id="name-title">
                        {this.props.title}
                    </div>
                </>;

    }

}