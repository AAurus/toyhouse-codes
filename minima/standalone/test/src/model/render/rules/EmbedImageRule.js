import React from "react";

import { EmbedImage } from '../../../components/page/ImageBlocks.js';
import BlockRule from "./BlockRule.js";

//// A rule to render in-line images onto text, aligned to either the left or the right.
//// Useful in story sections.
export default class EmbedImageRule extends BlockRule {

    // - pattern: [IMG_EMBED|RIGHT|link|caption|(alt)] ...
    // -          [IMG_EMBED|LEFT|link|caption|(alt)] ...
    // -          [IMG_EMBED|link|caption|(alt)] ...
    // -          [IMG_EMBED|link|caption] ...
    // -          [IMG_EMBED|link|(alt)] ...
    // -          [IMG_EMBED|link] ...
    // - group 1: [IMG_EMBED|link|caption|(alt)]
    // - group 2: main content
    pattern = /^(?:\[IMG_EMBED\|(.+)\])([\s\S]+?)?(?:(\r?\n)|$)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1];
            let parsedList = parsed.split("|");
            let body = matched[2];
            let result = renderer.parseRaw(body);
            return  <>
                        {this.parseImage(parsedList)}
                        {result}
                    </>;
        }
        return super.render(raw);
    }

    // --- parsedList: a list of parameters as found in pattern's group 1
    // parseImage: takes a list of parameters and returns an appropriate EmbedImage element
    parseImage(parsedList) {
        let direction, link, alt, caption;
        let textEntryOffset = 1;

        if (parsedList[0].toLowerCase() == "right" ||
            parsedList[0].toLowerCase() == "left") {
            direction = parsedList[0].toLowerCase();
            link = parsedList[1];
            textEntryOffset = 2;
        } else {
            direction = "left";
            link = parsedList[0];
        }

        for (let i = textEntryOffset; i < parsedList.length; i++) {
            let altMatch = parsedList[i].match(/\((.+)\)/);
            if (altMatch) {
                alt = altMatch[1];
            } else {
                caption = parsedList[i];
            }
        }

        return  <EmbedImage src={link}
                            direction={direction}
                            alt={alt}
                            caption={caption} />;
    }

}