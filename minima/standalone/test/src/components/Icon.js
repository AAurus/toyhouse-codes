import React from 'react';

export class Icon extends React.Component {

    render(props) {

        return <i class={"mdi mdi-" + this.props.icon + " " + this.props.class}></i>;

    }

}