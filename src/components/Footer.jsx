import React, { Component } from 'react';

import FilterLink from '../containers/FilterLink.jsx';
import LeftTodosCount from '../containers/LeftTodosCount.jsx';
import UndoRedo from '../containers/UndoRedo.jsx';

import styles from './Footer.less';

export default class Footer extends Component {
    render() {
        return (
          <div className={styles.root}>
            <div>
                <LeftTodosCount />
            </div>
            <div className={styles.root}>
                <FilterLink filter="SHOW_ALL">All</FilterLink>
                <FilterLink filter="SHOW_NEW">New</FilterLink>
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </div>

            <div>
                <UndoRedo />
            </div>
          </div>  
        );
    }
}
