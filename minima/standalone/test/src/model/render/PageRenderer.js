import React from 'react';
import {FullBlockText, Title, TraitList} from '../../components/page/TextBlocks.js';

export class PageRenderer {

    parseRaw (input) {
        let raw = input.trim();

        const traitListRegex = /^\[TRAITLIST\|(.+,)*(.+)\]/;
        const headerRegex = /^# .+/;

        let match = raw.match(traitListRegex);
        if (match) {
            return  <>
                        {this.parseTraitList(match[0].slice(11, match[0].length-1))}
                    </>;
        } else {
            let header = raw.match(headerRegex);
            if (header) {
                return  <>
                            <Title content={header[0].replace("# ", "")} />
                            {this.parseRaw(raw.replace(header[0], ""))}
                        </>;
            }
        }
        return  <>
                    <FullBlockText content={raw} />
                    <br/>
                </>;
    }

    parseTraitList (matched) {
        let list = matched.split(",");
        return  <>
                    <TraitList traits={list} />
                    <br/>
                </>;
    }

}