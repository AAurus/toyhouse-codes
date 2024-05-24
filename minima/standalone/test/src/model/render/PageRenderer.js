import React from 'react';
import BlockRule from './rules/BlockRule.js';
import TraitListRule from './rules/TraitListRule.js';
import TitleRule from './rules/TitleRule.js';

export class PageRenderer {

    parseRaw (input) {
        let raw = input.trim();

        const rules = [
            new TraitListRule(),
            new TitleRule(),
            new BlockRule()
        ];

        for (let i = 0; i < rules.length; i++) {
            if (rules[i].match(raw)) {
                return (rules[i].render(raw));
            }
        }

    }

}