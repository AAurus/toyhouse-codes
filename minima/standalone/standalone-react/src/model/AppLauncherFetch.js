import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App';

import {CFFetchReader} from './filesystem/CFFetchReader.js';

function AppLauncherFetch() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const cfr = new CFFetchReader();
    cfr.onInitLoad = readPages;
    cfr.onPageLoad = function() {console.log("page loaded")};
    cfr.onAllPagesLoaded = function() { console.log(cfr.pages); loadGUI() };
    cfr.initFetch("/data/brief.txt");

    function readPages() {

        for (let i = 0; i < cfr.pages.length; i++) {
            let link = "/data/pages/" + cfr.pages[i].name + ".txt";
            cfr.readPageFetch(i, link);
        }

    }

    function loadGUI() {

        root.render(
            <App briefData={cfr.exportBrief()} pageData={cfr.exportPages()}/>
        );

    }
}

export default AppLauncherFetch;