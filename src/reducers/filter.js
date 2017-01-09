import filterTypes from '../constants/filterTypes';

export default function filter(state = filterTypes.SHOW_ALL, action) {
    switch (action.type) {
        case 'SET_FILTER': {
            return action.filter;
        }

        default: {
            return state;
        }
    }
};
