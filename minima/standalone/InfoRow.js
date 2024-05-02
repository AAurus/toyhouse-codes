import React from 'react';
import ReactDOM from 'react-dom/client';

export class InfoRow extends React.Component {
    render(props) {
        return <div class="py-1 my-1 row align-items-center info-bar">
                    <div class="info-button-hollow-base">
                    </div>
                    <div class="info-button-hollow-edge">
                    </div>
                    <div class="info-button-base">
                    </div>
                    <div class="info-button-edge">
                    </div>
                    {this.props.content}
                </div>;
    }
}