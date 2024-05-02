import React from 'react';
import ReactDOM from 'react-dom/client';
import {PaletteLine} from './PaletteLine.js';
import {MenuTabs} from './MenuTabs.js';
import {Page} from './Page.js';

export class ContentColumn extends React.Component {

    render() {

        return  <div class="flex-column" id="content-panel-wrapper">
                    <PaletteLine colors={['#024', '#046', '#068', '#08a', '#0ac', '#0ce']} />
                    <MenuTabs pages={[
                            {
                                link: 'PROFILE',
                                icon: 'home',
                                selected: true
                            },
                            {
                                link: 'GALLERY',
                                icon: 'id-badge'
                            },
                            {
                                link: 'COMBAT',
                                icon: 'chess-knight'
                            },
                            {
                                link: 'STATS',
                                icon: 'chart-gantt'
                            },
                            {
                                link: 'RELATIONSHIPS',
                                icon: 'users'
                            },
                            {
                                link: 'STORY',
                                icon: 'book-open'
                            }
                        ]}/>
                    <div id="tabbed-content-wrapper">
                        <div class="tab-content ms-lg-3 px-2">
                            <Page link="PROFILE" quoteText="Text Here" contextText="describe context here" active/>
                            <Page link="GALLERY" quoteText="Text Her" contextText="describe context here"/>
                        </div>
                    </div>
                </div>;

    }

}