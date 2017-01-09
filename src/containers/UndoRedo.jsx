import React, { Component } from 'react';
import { connect } from 'react-redux';

import { undo, redo } from '../actions';
import { canUndo, canRedo } from '../selectors';

import Link from '../components/Link.jsx';

@connect(mapStateToProps, { undo, redo })
export default class UndoRedo extends Component {
    render() {
        const { undo, redo, canUndo, canRedo } = this.props;

        return (
            <div>
                <Link disabled={canUndo} onClick={undo}>⇦</Link>
                <Link disabled={canRedo} onClick={redo}>⇨</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        canUndo: canUndo(state),
        canRedo: canRedo(state)
    };
}
