import { fromJS, List, Map } from 'immutable';

function todo(state, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return new Map({
                id: action.id,
                text: action.text,
                completed: false
            });
        }

        case 'DELETE_TODO': {
            return state.get('id') !== action.id;
        }

        case 'TOGGLE_TODO': {
            if (state.get('id') !== action.id) {
                return state;
            }

            return state.set('completed', !state.get('completed'));
        }

        default: {
            return state;
        }
    }
};

export default function todos(state = new List(), action) {
    switch (action.type) {
        case 'GET_ALL_TODOS': {
            return [
                ...state
            ];
        }

        case 'ADD_TODO': {
            return state.push(todo(undefined, action));
        }

        case 'DELETE_TODO': {
            return state.filter(item => todo(item, action));
        }

        case 'TOGGLE_TODO': {
            return state.map(item => todo(item, action));
        }

        default: {
            return state;
        }
    }
};
