import React from 'react';
import {PaletteLine} from './PaletteLine.js';
import {MenuTabs} from './MenuTabs.js';
import {Page} from './Page.js';

export class ContentColumn extends React.Component {

    render(props) {

        console.log(this.props.data);

        return  <div class="flex-column" id="content-panel-wrapper">
                    <PaletteLine colors={['#024', '#046', '#068', '#08a', '#0ac', '#0ce']} />
                    <MenuTabs pages={this.props.data}/>
                    <div id="tabbed-content-wrapper">
                        <div class="tab-content ms-lg-3 px-2">
                            {this.props.data.map(this.addPage)}
                        </div>
                    </div>
                </div>;

    }

    addPage(page) {
        if (page.selected) {
            console.log(page);
            return <Page link={page.name} quoteText="Text Here" contextText="describe context here" active={true} raw={page.raw}/>
        }
        return <Page link={page.name} quoteText="Text Here" contextText="describe context here" raw={page.raw}/>;
    }

}