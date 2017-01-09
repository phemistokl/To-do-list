import React from 'react';
import { connect } from 'react-redux';

import { getLeftTodosCount } from '../selectors';

function mapStateToProps(state) {
    return {
        count: getLeftTodosCount(state)
    };
}

const Count = props => <span>{props.count} left</span>;

export default connect(mapStateToProps)(Count);
