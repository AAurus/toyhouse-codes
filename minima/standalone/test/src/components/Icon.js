import React from 'react';
import ReactDOM from 'react-dom/client';

export class Icon extends React.Component {

    render(props) {

        return <i class={"fa-solid fa-" + this.props.icon + " " + this.props.class}></i>;

    }

}