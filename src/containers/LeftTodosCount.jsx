import React from 'react';
import { connect } from 'react-redux';

import { getTodosLeftCount } from '../selectors';

function mapStateToProps(state, ownProps) {
    return {
        count: getTodosLeftCount(state)
    };
}

const Count = props => <span>{props.count} left</span>;

export default connect(mapStateToProps)(Count);
