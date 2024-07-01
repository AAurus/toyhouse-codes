import React from "react";

import { PortraitImage } from '../../../components/page/ImageBlocks.js';
import BlockRule from "./BlockRule.js";

export default class PortraitImageRule extends BlockRule {

    pattern = /^(?:\[IMG_PORTRAIT\|(.+)\])(?:(\r?\n)|$)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1];
            let parsedList = parsed.split("|");
            return  <>
                        {this.parseImage(parsedList)}
                    </>;
        }
        return super.render(raw);
    }

    parseImage(parsedList) {
        let link = parsedList[0];
        let alt = parsedList[1];

        return  <PortraitImage src={link}
                    alt={alt} />;
    }

}