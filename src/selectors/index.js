import filterTypes from '../constants/filterTypes';

export const getVisibleTodos = (state) => {
    switch (getFilter(state)) {
        case filterTypes.SHOW_ALL:
          return state.todos;

        case filterTypes.SHOW_COMPLETED:
          return state.todos.filter(todo => todo.completed);

        case filterTypes.SHOW_NEW:
          return state.todos.filter(todo => !todo.completed);
    }
}


export const getFilter = (state) => state.filter;

export const getTodosLeftCount = (state) => state.todos.filter(todo => !todo.completed).size;
