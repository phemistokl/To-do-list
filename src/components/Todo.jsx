import React, { Component } from 'react';

import styles from './Todo.less';

export default class Todo extends Component {
    render() {
        const { text, completed, onToggle, onDelete } = this.props;

        return (
            <div
                className={styles.root}
            >
            <span className={completed ? styles.completed : styles.check} onClick={onToggle}></span>
                {text}
            <span className={styles.delete} onClick={onDelete}> x </span>
            </div>
        );
    }
}
