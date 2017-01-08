import React, { Component } from 'react';

import styles from './Link.less';

export default class Link extends Component {
    render() {
        const { active, disabled, children, onClick } = this.props;

        if (active) {
            return <span className={styles.active}>{children}</span>;
        }

        if (disabled) {
            return <span className={styles.disabled}>{children}</span>;
        }

        return <span className={styles.root} onClick={onClick}>{children}</span>;
    }
}
