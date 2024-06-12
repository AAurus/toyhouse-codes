import React from 'react';
import {PageRenderer} from '../model/render/PageRenderer.js';

export class Page extends React.Component {

    render(props) {

        let pageRenderer = new PageRenderer();

//        console.log(this.props);

        let activeTags = "";

        if (this.props.active) {
            activeTags = " show active"
        }

        return  <div id={this.props.link} class={"tab-pane fade page" + activeTags} role="tabpanel">
                    <Quote quoteText={this.props.quoteText} contextText={this.props.contextText} />
                    <div class="page-content mx-5 mx-lg-0">
                        {this.renderBody(this.props.raw, pageRenderer)}
                    </div>

                    <div class="py-4 my-4 py-lg-3 my-lg-1"></div>
                </div>;

    }

    renderBody(raw,renderer) {
        return renderer.parseRawFull(raw);
    }

    renderBodyChunk(chunk, renderer) {
        return  <>
                    {renderer.parseRawBlock(chunk)}
                </>
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