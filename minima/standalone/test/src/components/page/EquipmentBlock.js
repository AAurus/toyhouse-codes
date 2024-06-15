import React from 'react';
import { Title, FullBlockText } from './TextBlocks.js';

export default class EquipmentBlock extends React.Component {

    render(props) {

        let alt = "undescribed image";
                if (this.props.alt) {
                    alt = this.props.alt;
                }

        return  <div class="my-3 w-100">
                    <div class="banner-inner image-wrapper color-panel-2">
                        <img class="image fit-contain" src={this.props.image} alt={alt}></img>
                        <Title content={this.props.name} class="title-no-margin mx-2 title-overlap subtitle"/>
                    </div>
                    <div class="me-4 me-lg-1 color-panel-3 image-embellish"></div>
                    <FullBlockText content={this.props.content}/>
                </div>;
    }

}