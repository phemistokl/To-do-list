import { connect } from 'react-redux';

import { toggleTodo, deleteTodo } from '../actions';
import { getVisibleTodos } from '../selectors';

import TodoList from '../components/TodoList.jsx';

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state)
    };
}

export default connect(mapStateToProps, { onToggleTodo: toggleTodo, onDeleteTodo: deleteTodo })(TodoList);
