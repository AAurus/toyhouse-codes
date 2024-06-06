import React from 'react';
import {AllInfoRows} from './InfoRow.js';
import {Name} from './Name.js';

export class BriefColumn extends React.Component {

    render(props) {

        return  <>
                    <div id="profile-image" class="color-panel-2">
                        <div class="color-panel-3" id="profile-top-embellish">
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