import React from "react";

import {Title} from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

export default class TitleRule extends BlockRule {

    pattern = /^(# .+)(?:\r?\n)([\s\S]*?)(?:(\r?\n)|$)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1].replace("# ", "");
            let body = matched[2];
            let result = renderer.parseRaw(body);
            return  <>
                        <Title content={parsed} />
                        {result}
                    </>;
        }
        return super.render(raw);
    }
}