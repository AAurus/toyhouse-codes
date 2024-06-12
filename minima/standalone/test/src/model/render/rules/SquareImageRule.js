import React from "react";

import { LargeSquareImage, SmallSquareImage } from '../../../components/page/ImageBlocks.js';
import BlockRule from "./BlockRule.js";

export class LargeSquareImageRule extends BlockRule {

    pattern = /^(?:\[IMG_LARGE\|(.+)\])(?:(\r?\n)|$)/;

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

        return  <LargeSquareImage src={link}
                            alt={alt} />;
    }

}

export class SmallSquareImageRule extends BlockRule {

    pattern = /^(?:\[IMG_SMALL\|(.+)\])(?:(\r?\n)|$)/;

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

        return  <SmallSquareImage src={link}
                            alt={alt} />;
    }

}