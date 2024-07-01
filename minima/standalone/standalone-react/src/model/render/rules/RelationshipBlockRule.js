import React from "react";

import RelationshipBlock from '../../../components/page/RelationshipBlock.js';
import BlockRule from "./BlockRule.js";

export default class RelationshipBlockRule extends BlockRule {

    pattern = /^(?:\[RELATIONSHIP\|(.+)\])([\s\S]*?)(?:(\r?\n)|$)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1];
            let parsedList = parsed.split("|");
            let body = matched[2].trim();
            return  <RelationshipBlock name={parsedList[0]} status={parsedList[1]} image={parsedList[2]} content={body}/>;
        }
        return super.render(raw);
    }

}