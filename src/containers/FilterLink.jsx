import { connect } from 'react-redux';

import { setFilter } from '../actions';
import { getFilter } from '../selectors';

import Link from '../components/Link.jsx';

function mapStateToProps(state, ownProps) {
    const filter = getFilter(state);

    return {
        active: ownProps.filter === filter
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
