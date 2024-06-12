import React from "react";

import {TraitList} from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

export default class TraitListRule extends BlockRule {

    pattern = /^\[TRAITLIST\|(.+,)*?(.+)\]/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[0].trim();
            parsed = parsed.slice(11, parsed.length-1);
            let list = parsed.split(",");
            return  <>
                        <TraitList traits={list} />
                    </>;
        }
        return super.render(raw);
    }
}