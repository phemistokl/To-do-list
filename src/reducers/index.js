import { combineReducers } from 'redux';

import todos from './todos';
import filter from './filter';

// const combineReducers = reducers => {
//     return (state = {}, action) =>
//         Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key] (
//                     state[key],
//                     action
//                 );
//
//                 return nextState;
//             },
//             {}
//         );
// };

export default combineReducers({ todos, filter });
