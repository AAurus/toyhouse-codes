import React from 'react';

export class PortraitImage extends React.Component {

    render(props) {

        let alt = "undescribed image";
        if (this.props.alt) {
            alt = this.props.alt;
        }

        return  <div class="w-100 p-0">
                    <div class="portrait-inner image-wrapper color-panel-2">
                        <img class="image fit-contain" src={this.props.src} alt={alt}></img>
                    </div>
                    <div class="me-4 me-lg-1 color-panel-3 image-embellish">
                    </div>
                </div>;
    }

}

export class LargeSquareImage extends React.Component {

    render(props) {

        let alt = "undescribed image";
        if (this.props.alt) {
            alt = this.props.alt;
        }

        return  <div class="w-100 p-0">
                    <div class="square-inner image-wrapper color-panel-2">
                        <img class="image fit-cover" src={this.props.src} alt={alt}></img>
                    </div>
                    <div class="me-4 me-lg-1 color-panel-3 image-embellish">
                    </div>
                </div>;

    }

}

export class SmallSquareImage extends React.Component {

    render(props) {

        let alt = "undescribed image";
        if (this.props.alt) {
            alt = this.props.alt;
        }

        return  <div class="w-100">
                    <div class="square-inner image-wrapper color-panel-2">
                        <img class="image fit-cover" src={this.props.src} alt={alt}></img>
                    </div>
                </div>;

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
                    <div class="image-wrapper square-inner color-panel-2">
                        <img class="image" src={this.props.src}></img>
                    </div>
                    <div class="me-2 me-lg-1 color-panel-3 image-embellish">
                    </div>
                </div>;
    }

}