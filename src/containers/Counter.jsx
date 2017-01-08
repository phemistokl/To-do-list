import React, { Component } from 'react';
import { connect } from 'react-redux';

import { counterIncrement, counterDecrement } from '../actions';

class Counter extends Component {
    render() {
        const { count, counterIncrement, counterDecrement } = this.props;

        return (
            <div>
                <button onClick={counterDecrement}>-</button>
                {count}
                <button onClick={counterIncrement}>+</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ count: state.get('counter') });

export default connect(mapStateToProps, { counterIncrement, counterDecrement })(Counter);
