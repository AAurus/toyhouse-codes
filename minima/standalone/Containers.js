import React from 'react';
import ReactDOM from 'react-dom/client';

export class BaseContainers extends React.Component {
    render() {
        return  <div class="container" id="main-container">
                    <div class="col-lg-4 m-3 pb-4" id="brief-panel-container">
                        <div id="profile-image" style={{background-image: url(https://i.imgur.com/5cZaUXz.png);}}>
                            <div id="profile-embellish"></div>
                        </div>
                        <div class="row" style="
                                margin-top: -4.25em;
                            ">
                            <div class="col-3" style="
                                    background-color: #ccc;
                                    z-index: 98;
                                "><br/><br/></div>
                            <div class="col-2" style="
                                    background-color: #ccc;
                                    margin-left: -10%;
                                    transform: skew(30deg, 0.0deg);
                                "></div>
                            <div class="" style="
                                    width: 5%;
                                    background-color: #ddd;
                                    margin-left: 5%;
                                    transform: skew(30deg, 0.0deg);
                                "></div>
                        </div>
                        <div id="info-row-container">
                        </div>
                    </div>
                    <div class="col-lg ml-lg-0 mr-3 ml-3 my-3 px-0" id="content-panel-container">

                    </div>
                </div>;
    }
}