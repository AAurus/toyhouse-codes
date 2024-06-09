import React from "react";

import {FullBlockText} from '../../../components/page/TextBlocks.js';

export default class BlockRule {

    pattern = /^.+?/;

    constructor() {

    }

    match(str) {
        let terminator = /(?:(\r?\n)+|$)/;
        return str.match(new RegExp(this.pattern.source + terminator.source));
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