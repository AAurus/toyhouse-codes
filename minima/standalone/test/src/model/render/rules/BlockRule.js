import React from "react";

import {FullBlockText} from '../../../components/page/TextBlocks.js';

export default class BlockRule {

    pattern = /^.*/;

    constructor() {

    }

    match(str) {
        return str.match(this.pattern);
    }

    render(raw, renderer) {
        if (raw == "") {
            return <br/>;
        }
        return <>
                   <FullBlockText content={raw} />
               </>;
    }

}