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
            return <h1>
                       <span class="color-accent-text">{titleFirst}</span>{titleRest}
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

export class RelationshipBlock extends React.Component {

    render(props) {
        return  <div class="col-12">
                    <div class="row ps-3">
                        <SmallIconImage src={this.props.image}/>
                        <div class="col">
                            <Title content={this.props.name}/>
                            <p class="color-transparent-text">{this.props.status}</p>
                            <FullBlockText content={this.props.content}/>
                        </div>
                    </div>
                </div>;
    }

}