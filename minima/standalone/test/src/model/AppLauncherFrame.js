import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App';

import {CFFrameReader} from './filesystem/CFFrameReader.js';

function AppLauncherFrame() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const cfr = new CFFrameReader();
    cfr.onInitLoad = readPages;
    cfr.onPageLoad = function() {console.log("page loaded")};
    cfr.onAllPagesLoaded = function() { console.log(cfr.pages); loadGUI() };

    function readPages() {
        alert(cfr.pages.length);
        for (let i = 0; i < cfr.pages.length; i++) {
            let iPageFrame = document.createElement('iframe');
                    iPageFrame.src = "./data/pages/" + cfr.pages[i].name + ".txt";
                    iPageFrame.onload = function() {
                        cfr.readPageFrame(i,this);
                        this.remove();
                    };
                    iPageFrame.onerror = function() {
                        cfr.errorPage(i);
                        this.remove();
                    }
                    document.body.appendChild(iPageFrame);
        }

    }

    function loadGUI() {

        root.render(
            <App briefData={cfr.exportBrief()} pageData={cfr.exportPages()}/>
        );

    }

    var iDataFrame = document.createElement('iframe');
    iDataFrame.src = "./data/brief.txt";
    iDataFrame.onload = function() {
        cfr.initFrame(this);
        this.remove();
    };
    document.body.appendChild(iDataFrame);
}

export default AppLauncherFrame;