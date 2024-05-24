import React from "react";

import {Title} from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

export default class TitleRule extends BlockRule {

    pattern = /^# .+/;

    render (raw) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[0].replace("# ", "");
            return  <>
                        <Title content={parsed} />
                    </>;
        }
        return super.render(raw);
    }
}