import React from 'react';
import {Icon} from './Icon.js';

export class MenuTabs extends React.Component {
    render(props) {
        return  <ul class="w-100 ms-0 nav row justify-content-around mt-3" id="menu-bar" role="tablist">
                    {this.props.pages.map((data) => <MenuItem page={data} key={data.name}/>)}
                </ul>;
    }
}

class MenuItem extends React.Component {
    render(props) {

        let ariaSelected = "false";
        let activeTag = "";

        if (this.props.page.selected) {
            ariaSelected = "true";
            activeTag = "active";
        }

        return <li class="col-lg col-4 nav-item menu-item" role="presentation">
            <a class={"nav-link color-accent-text " + activeTag} data-toggle="pill" role="tab"
                    data-bs-toggle="tab" data-bs-target={'#' + this.props.page.name}
                    aria-controls={this.props.page.name} aria-selected={ariaSelected}>
                <Icon icon={this.props.page.icon}/>
            </a>
        </li>
    }
}