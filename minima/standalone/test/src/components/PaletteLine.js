import React from 'react';
import ReactDOM from 'react-dom/client';

export class PaletteLine extends React.Component {
    render(props) {



        return <div class="w-100 ms-0 d-flex flex-row" id="palette-line-wrapper">
                    {this.props.colors.map((color) => <PaletteSwatch color={color}/>)}
                </div>;
    }
}

class PaletteSwatch extends React.Component {
    render(props) {
        return <div class="palette-swatch" style={{backgroundColor: this.props.color}}></div>;
    }
}