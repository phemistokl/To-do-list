import React, { Component } from 'react';
import { connect } from 'react-redux';

import { undo, redo } from '../actions';

import Link from '../components/Link.jsx';

@connect(undefined, { undo, redo })
export default class UndoRedo extends Component {
    render() {
        const { undo, redo } = this.props;

        return (
            <div>
                <Link onClick={undo}>⇦</Link>
                <Link onClick={redo}>⇨</Link>
            </div>
        );
    }
}
