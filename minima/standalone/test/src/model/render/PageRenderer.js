import React from 'react';
import BlockRule from './rules/BlockRule.js';
import TraitListRule from './rules/TraitListRule.js';
import TitleRule from './rules/TitleRule.js';
import EmbedImageRule from './rules/EmbedImageRule.js';
import PortraitImageRule from './rules/PortraitImageRule.js';
import { LargeSquareImageRule, SmallSquareImageRule } from './rules/SquareImageRule.js';
import RelationshipBlockRule from './rules/RelationshipBlockRule.js';
import EquipmentBlockRule from './rules/EquipmentBlockRule.js';
import FeatureBlockRule from './rules/FeatureBlockRule.js';
import StatBlockRule from './rules/StatBlockRule.js';
import DivisionRule from './rules/DivisionRule.js';

export class PageRenderer {

    rules = [
        new DivisionRule(),
        new TitleRule(),
        new EmbedImageRule(),
        new PortraitImageRule(),
        new LargeSquareImageRule(),
        new SmallSquareImageRule(),
        new TraitListRule(),
        new StatBlockRule(),
        new RelationshipBlockRule(),
        new EquipmentBlockRule(),
        new FeatureBlockRule(),
        new BlockRule()
    ];

    parseRaw (input) {
        let raw = input.trim();

        for (let i = 0; i < this.rules.length; i++) {
            if (this.rules[i].match(raw)) {
                return this.rules[i].render(raw, this);
            }
        }

    }

    parseRawBlock (input) {
        return  <div class="mb-3">
                    { this.parseRaw(input) }
                </div>;
    }

    parseRawFull (raw) {
        let parse = raw.trim();
        let render = new Array();

        while (parse != "") {
            for (let i = 0; i < this.rules.length; i++) {
                let match = this.rules[i].match(parse);
                if (match) {
                    let component = this.rules[i].render(match[0], this);
                    render.push(<div class="mb-3">{component}</div>);
                    parse = parse.replace(match[0], "").trim();
                    break;
                }
            }
        }
        return render;
    }

}