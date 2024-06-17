import React from "react";

import EquipmentBlock from '../../../components/page/EquipmentBlock.js';
import BlockRule from "./BlockRule.js";

//// Provides a profile image, a name, a relationship, and body text in a single block.
export default class EquipmentBlockRule extends BlockRule {

    // - pattern: [ITEM|link|name|relationship] ...
    // - group 1: link|name|relationship
    // - group 2: body text
    pattern = /^(?:\[ITEM\|(.+)\])([\s\S]*?)(?:(\r?\n)|$)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1];
            let parsedList = parsed.split("|");
            let body = matched[2].trim();
            return  <EquipmentBlock name={parsedList[0]} image={parsedList[1]} content={body}/>;
        }
        return super.render(raw);
    }

}