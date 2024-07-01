import React from "react";

import {FullBlockText} from '../../../components/page/TextBlocks.js';

//// The basis of different rendering rules, and also the default text rendering rule.
export default class BlockRule {

    // default pattern
    pattern = /^.+?/;

    // default match
    match(str) {
        let terminator = /(?:(\r?\n)+|$)/;
        return str.match(new RegExp(this.pattern.source + terminator.source));
    }

    // default render: render text as text
    render(raw, renderer) {
        if (raw == "") {
            return <br/>;
        }
        return <>
                   <FullBlockText content={raw} />
               </>;
    }

}