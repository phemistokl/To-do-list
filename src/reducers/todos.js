function todo(state, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        }

        case 'DELETE_TODO': {
            return state.id !== action.id;
        }

        case 'TOGGLE_TODO': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        }

        default: {
            return state;
        }
    }
};

export default function todos(state = [], action) {
    switch (action.type) {
        case 'GET_ALL_TODOS': {
            return [
                ...state
            ];
        }

        case 'ADD_TODO': {
            return [
                ...state,
                todo(undefined, action)
            ];
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
