import React from 'react';

export class Icon extends React.Component {

    render(props) {

        return <i class={"fa-solid fa-" + this.props.icon + " " + this.props.class}></i>;

    }

}