import React from 'react';
import { Icon } from '../Icon.js';

export default class StatItem extends React.Component {
    render(props) {
        return  <div class="row justify-content-between mx-0 my-1">
                    <div class="col-auto row ps-3">
                        <div class="col-auto ps-2 pe-0 color-panel-2">
                            {this.props.title}
                        </div>
                        <div class="col-auto pe-2 color-panel-2 stat-item-endcap">
                        </div>
                    </div>
                    <div class="col-auto">
                        {this.parseContent(this.props.content, this.props.type)}
                    </div>
                </div>;
    }

    parseContent(raw, type) {
        if (type === 's') {
            let fills = new Array(5);
            for (let i = 1; i <= 5; i++) {
                if (i*2 <= raw) {
                    fills[i] = "";
                } else if ((i-1)*2 < raw && i*2 > raw) {
                    fills[i] = "-half-full";
                } else {
                    fills[i] = "-outline"
                }
            }
            return  <>
                        {fills.map((fill) => <Icon icon={"circle" + fill} />)}
                    </>
        }
        return raw;
    }
}