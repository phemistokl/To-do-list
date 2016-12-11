import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
//
//     const getState = () => state;
//
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };
//
//     const subscribe = (listener) => {
//         listeners.push(listener);
//
//         return () => {
//             listeners = listeners.filter(l => l !== listener);
//         }
//     };
//
//     dispatch({});
//
//     return { getState, dispatch, subscribe };
// };
// const logger = store => next => action => {
//   console.group(action.type);
//   console.log('previous state', store.getState());
//   console.info('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   console.groupEnd(action.type);
//   return result;
// }
// const persistData = store => next => action => {
//
//   const localState = localStorage.getItem('todo-list');
//
//   if (localState && typeof JSON.parse(localState) === 'object') {
//     localState = JSON.parse(localState);
//   } else {
//     console.log("jo");
//   }
// }

export default createStore(
  rootReducer,
  //applyMiddleware(logger)
);
