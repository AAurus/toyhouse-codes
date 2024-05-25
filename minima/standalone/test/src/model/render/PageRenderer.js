import React from 'react';
import BlockRule from './rules/BlockRule.js';
import TraitListRule from './rules/TraitListRule.js';
import TitleRule from './rules/TitleRule.js';
import EmbedImageRule from './rules/EmbedImageRule.js';

export class PageRenderer {

    parseRaw (input) {
        let raw = input.trim();

        const rules = [
            new TitleRule(),
            new TraitListRule(),
            new EmbedImageRule(),
            new BlockRule()
        ];

        for (let i = 0; i < rules.length; i++) {
            if (rules[i].match(raw)) {
                return rules[i].render(raw, this);
            }
        }

    }

    parseRawBlock (input) {
        return  <div class="mb-3">
                    { this.parseRaw(input) }
                </div>;
    }

}