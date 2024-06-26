import React from 'react';
import { SmallIconImage } from './ImageBlocks.js';

export class FullBlockText extends React.Component {

    render(props) {
        return  this.renderContent(this.props.content);
    }

    renderContent(content) {
        let result = content.split("\n");
        return result.map((line) => <p>{line}</p>);
    }
}

export class Title extends React.Component {

    render(props) {
        if (this.props.content) {
            let titleFirst = this.props.content[0];
            let titleRest = this.props.content.substring(1);
            return <h1 class={"mt-3 mt-lg-0 " + this.props.class}>
                       <span class="color-text-accent">{titleFirst}</span>{titleRest}
                   </h1>;
        }
        return <></>;
    }

}

export class TraitList extends React.Component {

    render(props) {
        if (this.props.traits) {
            return  <div class="d-flex flex-row mx-5 justify-content-around text-center">
                        {this.addWithSpacers(this.props.traits)}
                    </div>;
        }
        return <></>;
    }

    addWithSpacers(elems) {
        return  <>
                    <div>{elems[0]}</div>
                    {elems.slice(1).map((trait) =>
                        <>
                            <div>—</div>
                            <div>{trait}</div>
                        </>)
                    }
                </>;
    }

}