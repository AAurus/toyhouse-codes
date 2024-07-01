import React from 'react';
import { SmallIconImage } from './ImageBlocks.js';
import { Title, FullBlockText } from './TextBlocks.js';

export default class RelationshipBlock extends React.Component {

    render(props) {
        return  <div class="col-12">
                    <div class="row ps-3">
                        <SmallIconImage src={this.props.image}/>
                        <div class="col">
                            <Title content={this.props.name} class="title-no-margin"/>
                            <p class="color-text-transparent-1">{this.props.status}</p>
                            <FullBlockText content={this.props.content}/>
                        </div>
                    </div>
                </div>;
    }

}