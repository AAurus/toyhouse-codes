import React from "react";

import EquipmentBlock from '../../../components/page/EquipmentBlock.js';
import BlockRule from "./BlockRule.js";

export default class RelationshipBlockRule extends BlockRule {

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