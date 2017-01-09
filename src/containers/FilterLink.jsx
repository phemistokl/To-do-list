import { connect } from 'react-redux';

import { setFilter } from '../actions';
import { isFilterActive } from '../selectors';

import Link from '../components/Link.jsx';

function mapStateToProps(state, ownProps) {
    return {
        active: isFilterActive(state, ownProps.filter)
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
