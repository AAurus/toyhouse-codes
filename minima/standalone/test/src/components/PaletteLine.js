import React from 'react';

export class PaletteLine extends React.Component {
    render(props) {



        return <div class="w-100 ms-0 d-flex flex-row" id="palette-line-wrapper">
                    {this.props.colors.map((color) => <PaletteSwatch color={color} key={color}/>)}
                </div>;
    }
}

class PaletteSwatch extends React.Component {
    render(props) {
        return <div class="palette-swatch" style={{backgroundColor: this.props.color}}></div>;
    }
}