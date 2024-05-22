import React from 'react';
import {BriefColumn} from './BriefColumn.js';
import {ContentColumn} from './ContentColumn.js';

export class BaseContainers extends React.Component {

    render(props) {

        return  <div class="container color-panel-2" id="main-container">
                    <br/>
                    <div class="row justify-content-around" id="container-row">
                        <div class="col-lg-4 m-3 pb-4 color-panel-1" id="brief-panel-container">
                            <BriefColumn data={this.props.briefData}/>
                        </div>
                        <div class="col-lg ms-lg-0 m-3 my-3 px-0 color-panel-1" id="content-panel-container">
                            <ContentColumn data={this.props.pageData}/>
                        </div>
                    </div>
                </div>;

    }
}