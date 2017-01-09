import { createSelector } from 'reselect';

import filterTypes from '../constants/filterTypes';

export const getFilter = state => state.get('filter');

export const getTodos = state => state.getIn(['todos', 'current']);

export const getCounter = state => state.get('counter');

export const canUndo = state => state.getIn(['todos', 'before']).isEmpty();

export const canRedo = state => state.getIn(['todos', 'after']).isEmpty();

export const getVisibleTodos = createSelector(
    getTodos,
    getFilter,
    (todos, filter) => {
        switch (filter) {
            case filterTypes.SHOW_ALL:
              return todos;

            case filterTypes.SHOW_COMPLETED:
              return todos.filter(todo => todo.get('completed'));

            case filterTypes.SHOW_NEW:
              return todos.filter(todo => !todo.get('completed'));
        }
    }
);

export const getLeftTodosCount = createSelector(
  getTodos,
  todos => todos.filter(todo => !todo.get('completed')).size
);

export const isFilterActive = (state, filter) => getFilter(state) === filter;
