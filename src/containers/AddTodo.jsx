import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import Input from '../components/Input.jsx';

@connect(undefined, { onAddTodo: addTodo })
export default class AddTodo extends Component {
    render() {
        return <Input onEnter={this.props.onAddTodo} placeholder="What needs to be done?" />;
    }
}
