import React from 'react';

export class LargeImage extends React.Component {



}

export class EmbedImage extends React.Component {

    render(props) {
        let direction = "left";
        let alt = "undescribed image";

        if (this.props.alt) {
            alt = this.props.alt;
        }

        if (this.props.direction == "right") {
            direction = this.props.direction;
        }

        return  <div class={"pt-2 pb-1 w-25 text-center color-panel-2 embed-image float-" + direction}>
                    <img class="w-100" src={this.props.src} alt={alt}></img>
                    { this.addCaption() }
                </div>;
    }

    addCaption() {
        console.log(this.props);
        if (this.props.imgCaption) {
            return  <div class="text-left mx-2">
                        {this.props.imgCaption}
                    </div>
        }
        return null;
    }

}