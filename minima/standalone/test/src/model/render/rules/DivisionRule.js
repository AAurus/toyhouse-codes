import React from "react";

import {TraitList} from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

export default class DivisionRule extends BlockRule {

    pattern = /^\[(BLOCK\d*)\](?:[\s\S])+?\[\/\1\]/;
    outerBlockPattern = /(\[(\d*)\](?:[\s\S])+?\[\/\2\])/g;
    innerBlockPattern = /\[(\d*)\]([\s\S]+)\[\/\1\]/;

    render (raw, renderer) {
        let parse = raw;
        let match = this.match(raw);
        if (match) {
            let matched = parse.match(this.outerBlockPattern);
            console.log(matched);
            console.log(parse);
            parse = parse.replace(this.outerBlockPattern,"%").trim();
            return  <div class="row">
                        {this.renderResult(parse.split(/(?:\r?\n)/), matched, renderer)}
                    </div>;
        }
        return super.render(raw);
    }

    renderResult (parsed, blocks, renderer) {
        let result = new Array();
        let blockIndex = 0;
        for (let i = 0; i < parsed.length; i++) {
            let currentParse = parsed[i];
            currentParse = currentParse.replace(/\[BLOCK\d*\]/,"");
            currentParse = currentParse.replace(/\[\/BLOCK\d*\]/,"");

            console.log(currentParse);
            if (currentParse != "") {
                if (!currentParse.match("%")) {
                    result.push(renderer.parseRawFull(currentParse));
                    continue;
                }
                if (currentParse === "%") {
                    result.push(this.renderBlock(blocks[blockIndex], renderer));
                    blockIndex++;
                    continue;
                }
            }
        }
        return result;
    }

    renderBlock (raw, renderer) {
        let matched = raw.match(this.innerBlockPattern);
        if (matched) {
            let size = Math.max(1, Math.min(12, matched[1]));
            let content = matched[2].trim();

            return  <div class={"m-0 col-12 col-lg-" + size}>
                        {renderer.parseRaw(content)}
                        <div style={{marginBottom: "-3pt"}}></div>
                    </div>;
        }
    }
}