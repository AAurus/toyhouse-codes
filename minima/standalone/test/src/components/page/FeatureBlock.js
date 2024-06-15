import React from 'react';
import { Title, FullBlockText } from './TextBlocks.js';
import { Icon } from '../Icon.js';

export default class FeatureBlock extends React.Component {

    render (props) {
        return  <div class="my-1 feature-wrapper">
                    <div class="ms-2 me-1 my-2">
                        <Title content={this.props.name} class="subtitle" />
                        {this.props.content}
                        <div class="icon-underlap">
                            <Icon icon={this.props.icon} class="color-text-transparent-2" />
                        </div>
                    </div>
                </div>;
    }

}