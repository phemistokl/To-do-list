export const getAllTodos = text => {
    return {
        type: 'GET_ALL_TODOS'
    };
};

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: Date.now(),
        text
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter
    };
};

export const undo = () => {
    return {
        type: 'UNDO'
    };
};

export const redo = () => {
    return {
        type: 'REDO'
    };
};

export const counterIncrement = () => {
    return {
        type: 'COUNTER_INCREMENT'
    };
};

export const counterDecrement = () => {
    return {
        type: 'COUNTER_DECREMENT'
    };
};
