import React from "react";

import FeatureBlock from '../../../components/page/FeatureBlock.js';
import BlockRule from "./BlockRule.js";

////
export default class FeatureBlockRule extends BlockRule {

    pattern = /^(?:\[FEATURE\|(.+)\])([\s\S]*?)(?:(\r?\n)|$)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1];
            let parsedList = parsed.split("|");
            let body = matched[2].trim();
            let content = new BlockRule().render(body, renderer);
            return  <FeatureBlock name={parsedList[0]} icon={parsedList[1]} content={content}/>;
        }
        return super.render(raw);
    }

}