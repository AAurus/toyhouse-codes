import React from "react";

import {TraitList} from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

//// A rule that allows users access to Bootstrap's grid features.
export default class DivisionRule extends BlockRule {

    // - pattern: [BLOCK] ... [/BLOCK]
    //            [BLOCK1] ... [/BLOCK1]
    // - group 1: BLOCK\d*
    pattern = /^\[(BLOCK\d*)\](?:[\s\S])+?\[\/\1\]/;

    // - outerBlockPattern: [1] ... [/1]
    //                      [1S] ... [/1S]
    // - group 1: all
    // - group 2: \d*S?
    outerBlockPattern = /(\[(\d*S?)\](?:[\s\S])+?\[\/\2\])/g;

    // - innerBlockPattern: [1] ... [/1]
    //                      [1S] ... [/1S]
    // - group 1: \d*S?
    // - group 2: [\s\S]+
    innerBlockPattern = /\[(\d*S?)\]([\s\S]+)\[\/\1\]/;

    render (raw, renderer) {
        let parse = raw;
        let match = this.match(raw);
        if (match) {
            let matched = parse.match(this.outerBlockPattern);
            console.log(matched);
            parse = parse.replace(this.outerBlockPattern,"%").trim();
            return  <div class="row">
                        {this.renderResult(parse.split(/(?:\r?\n)/), matched, renderer)}
                    </div>;
        }
        return super.render(raw);
    }

    // --- parsed is list of replaced straggler text (line by line)
    // --- blocks is list of blocks (matches outer block pattern)
    // --- renderer is renderer for rule
    // renderResult: takes split results and iterates through, creating HTML as needed
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

    // --- raw is raw outer block pattern match
    // --- renderer is renderer for rule
    // renderBlock: takes single raw block and produces appropriate column div
    renderBlock (raw, renderer) {
        let matched = raw.match(this.innerBlockPattern);
        if (matched) {
            let size = Math.max(1, Math.min(12, matched[1].charAt(0)));
            let content = matched[2].trim();
            console.log(content);

            if (matched[1].charAt(1) === 'S') {
                return  <div class={"col-" + size}>
                            {renderer.parseRawFull(content)}
                            <div style={{marginBottom: "-3pt"}}></div>
                        </div>;
            }

            return  <div class={"col-12 col-lg-" + size}>
                        {renderer.parseRawFull(content)}
                        <div style={{marginBottom: "-3pt"}}></div>
                    </div>;
        }
    }
}