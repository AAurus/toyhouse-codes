import React from 'react';
import ReactDOM from 'react-dom/client';
import {AllInfoRows} from './InfoRow.js';
import {Name} from './Name.js';

export class BriefColumn extends React.Component {

    render() {

        return  <>
                    <div id="profile-image">
                        <div class="color-panel-3" id="profile-top-embellish">
                        </div>
                    </div>
                    <ProfilePhotoEmbellishment />
                    <Name name="name lastname" title="title"/>
                    <AllInfoRows items={[
                        {
                            icon: 'signature',
                            content: 'Nicknames and Aliases'
                        },
                        {
                            icon: 'venus-mars',
                            content: 'Gender (Pronouns)'
                        },
                        {
                            icon: 'heart',
                            content: 'Sexual + Romantic Orientation'
                        },
                        {
                            icon: 'clock',
                            content: 'Age'
                        },
                        {
                            icon: 'dna',
                            content: 'Species / Race'
                        },
                        {
                            icon: 'briefcase',
                            content: 'Occupation'
                        },
                        {
                            icon: 'earth',
                            content: 'Nationality'
                        }
                    ]}/>
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