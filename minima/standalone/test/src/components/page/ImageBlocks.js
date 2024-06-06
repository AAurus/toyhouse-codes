import React from 'react';

export class LargeImage extends React.Component {

    render(props) {
        return <div></div>;
    }

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

        return  <div class={"pt-2 pb-1 mt-1 w-25 text-center color-panel-2 embed-image float-" + direction}>
                    <img class="w-100" src={this.props.src} alt={alt}></img>
                    { this.addCaption() }
                </div>;
    }

    addCaption() {
        if (this.props.caption) {
            return  <div class="text-left mx-2">
                        {this.props.caption}
                    </div>
        }
        return null;
    }

}

export class SmallIconImage extends React.Component {

    render(props) {
        return  <div class="w-20 p-0">
                    <div class="square-inner image color-panel-2" style={{backgroundImage: `url(${this.props.src})`}}>
                    </div>
                    <div class="mr-2 mr-lg-1 color-panel-3 image-embellish">
                    </div>
                </div>;
    }

}