import React, { Component } from 'react';

import TodoList from '../containers/VisibleTodoList.jsx';
import AddTodo from '../containers/AddTodo.jsx';
import Counter from '../containers/Counter.jsx';
import Footer from './Footer.jsx';

import styles from './TodoApp.less';

export default class TodoApp extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2 className={styles.header}>To do</h2>

                    <div className={styles.app}>
                        <AddTodo />
                        <TodoList />
                        <Footer />
                    </div>

                    <div className={styles.counter}>
                        <Counter />
                    </div>
                </div>
            </div>
        );
    }
}
