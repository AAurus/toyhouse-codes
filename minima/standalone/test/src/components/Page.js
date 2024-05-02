import React from 'react';
import ReactDOM from 'react-dom/client';
import {FullBlockText} from './page/BlockText.js';

export class Page extends React.Component {

    render(props) {

        let activeTags = "";

        if (this.props.active) {
            activeTags = "show active"
        }

        return  <div id={this.props.link} class={"tab-pane fade page " + activeTags} role="tabpanel">
                    <Quote quoteText={this.props.quoteText} contextText={this.props.contextText} />
                    <div class="page-content">
                        <FullBlockText title="profile" content="aaf"/>
                        <FullBlockText content="aaf"/>
                    </div>
                </div>;

    }
}

export class Quote extends React.Component {

    render(props) {

        return  <blockquote class="quote-header">
                    "{this.props.quoteText}"
                    <p class="quote-subtext color-transparent-text">
                        — {this.props.contextText} —
                    </p>
                    <hr class="quote-separator"></hr>
                </blockquote>;

    }
}