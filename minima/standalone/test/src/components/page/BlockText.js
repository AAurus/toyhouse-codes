import React from 'react';
import ReactDOM from 'react-dom/client';

export class FullBlockText extends React.Component {

    render(props) {

        if (this.props.title) {

                    let titleFirst = this.props.title[0];
                    let titleRest = this.props.title.substring(1);

                    return  <>
                                <h1>
                                    <span class="color-accent-text">{titleFirst}</span>{titleRest}
                                </h1>
                                <p>{this.props.content}</p>
                            </>;

        }

        return  <p>{this.props.content}</p>;

    }
}

export class BadgesBlockText extends React.Component {

    render(props) {

        let titleFirst = this.props.title[0];
        let titleRest = this.props.title.substring(1);

        return  <>
                    <h1>
                        <span class="color-accent-text">{titleFirst}</span>{titleRest}
                    </h1>
                    <p>{this.props.content}</p>
                </>;

    }
}