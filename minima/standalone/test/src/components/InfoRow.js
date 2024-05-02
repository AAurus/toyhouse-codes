import React from 'react';
import ReactDOM from 'react-dom/client';
import {Icon} from './Icon.js';

export class AllInfoRows extends React.Component {

    render(props) {

        return  <>
                    {this.props.items.map((item) => <InfoRow icon={item.icon} content={item.content}/>)}
                </>;

    }
}

export class InfoRow extends React.Component {

    render(props) {

        return <div class="py-1 my-1 row align-items-center info-bar color-panel-2">
                    <div class="info-button-hollow-base color-panel-1">
                    </div>
                    <div class="info-button-hollow-edge color-panel-1">
                    </div>
                    <div class="info-button-base color-accent-background">
                    </div>
                    <div class="info-button-edge color-accent-background">
                    <Icon class="info-row-icon" icon={this.props.icon}/>
                    </div>
                    <div class="info-row-content">{this.props.content}</div>
                </div>;

    }
}