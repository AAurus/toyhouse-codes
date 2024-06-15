import React from 'react';
import {AllInfoRows} from './InfoRow.js';
import {Name} from './Name.js';

export class BriefColumn extends React.Component {

    render(props) {
        return  <>
                    <div id="profile-image" class="color-panel-2 square-inner image-wrapper">
                        <img class="image" src={this.props.data.get("imageURL")}></img>
                        <div id="profile-top-embellish">
                            <ProfilePhotoEmbellishmentIcon />
                        </div>
                    </div>
                    <ProfilePhotoEmbellishment />
                    <Name name={this.props.data.get("name")} title={this.props.data.get("title")}/>
                    <AllInfoRows items={this.props.data.get("infoRows")}/>
                </>;

    }

}

class ProfilePhotoEmbellishment extends React.Component {

    render() {

        return  <div class="row" id="profile-embellish-wrapper">
                    <div class="col-3 profile-embellish color-panel-4"><br/><br/></div>
                    <div class="col-2 profile-embellish color-panel-4" id="profile-embellish-edge"></div>
                    <div class="profile-embellish color-panel-3" id="profile-embellish-outer"></div>
                </div>;

    }
}

class ProfilePhotoEmbellishmentIcon extends React.Component {

    render() {
        return  <svg class="spin" viewBox="1 1 22 22">
                    <path fill="none" class="color-text-transparent-1" id="profile-embellish-icon"
                        d="m 12.017564,12 v 0 m 0.25,0 c 0,0.138071 -0.111929,0.25 -0.25,0.25 -0.138071,0 -0.25, -0.111929 -0.25,-0.25 0,-0.138071 0.111929,-0.25 0.25,-0.25 0.138071,0 0.25,0.111929 0.25,0.25 z m 8.225228,0 c 0,4.690439 -3.802353,8.492791 -8.492792,8.492791 C 7.3095605,20.492791 3.507208,16.690439 3.5072079,12 3.5072079,7.3095609 7.3095604,3.5072088 12,3.5072088 16.69044,3.5072089 20.492792,7.309561 20.492792,12 Z m -8.475229,5.017952 v 4.999611 m 5.017953,-10.017562 h 4.999611 M 12.017565,6.9820473 V 1.9824367 M 2,12 h 4.999611" />
                </svg>
    }

}