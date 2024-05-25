import React from "react";

import {EmbedImage} from '../../../components/page/ImageBlocks.js';
import BlockRule from "./BlockRule.js";

export default class EmbedImageRule extends BlockRule {

    pattern = /^(?:\[IMAGE\|(.+)\])\r?\n(.*)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1];
            let parsedList = parsed.split("|");
            let body = matched[2].trim();
            return  <>
                        <EmbedImage src={parsedList[0]} direction="right" imgCaption="caption"/>
                        {renderer.parseRaw(body)}
                    </>;
        }
        return super.render(raw);
    }
}