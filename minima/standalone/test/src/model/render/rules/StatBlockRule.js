import React from "react";

import StatItem from '../../../components/page/StatItem.js';
import BlockRule from "./BlockRule.js";

export default class StatBlockRule extends BlockRule {

    pattern = /^\[STATBLOCK\]([\s\S]*)\[\/STATBLOCK\]/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1].trim();
            let list = parsed.split(/\r?\n/);
            console.log(list);
            return  <div class="col-12">
                        {list.map((item) => (this.parseStatItem(item)))}
                    </div>;
        }
        return super.render(raw);
    }

    parseStatItem (raw) {

        let type = raw.charAt(0);
        let components = raw.substring(2).trim().split(":");
        return <StatItem title={components[0].trim()} content={components[1].trim()} type={type}/>;
    }
}