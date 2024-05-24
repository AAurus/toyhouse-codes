import React from "react";

import {TraitList} from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

export default class TraitListRule extends BlockRule {

    pattern = /^\[TRAITLIST\|(.+,)*(.+)\]/;

    render (raw) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[0].slice(11, matched[0].length-1);
            let list = parsed.split(",");
            return  <div class="mb-3">
                        <TraitList traits={list} />
                    </div>;
        }
        return super.render(raw);
    }
}