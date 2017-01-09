import { combineReducers } from 'redux-immutable';

import todos from './todos';
import filter from './filter';
import counter from './counter';
import undoable from './undoable';

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

export default combineReducers({
  todos: undoable(todos), 
  filter,
  counter
});
