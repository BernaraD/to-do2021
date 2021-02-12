const initialState = {
    todos: [
        {_id: Math.random(), title: 'Build react app', done: true },
        {_id: Math.random(), title: 'Drink coffee', done: false },
        {_id: Math.random(), title: 'Call mom', done: false},
    ]
};

const todo = (state= initialState, action) => {
    switch (action.type) {
        case "GET_TODO_LIST":
            return {
                ...state,
                todos: action.payload
            };

        case "SET_TODO_LIST":
            return {
                ...state,
                todos: action.payload
            };

        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, {title: action.payload, done: false, _id: Math.random()}]
            };

        case 'TODO_DELETE':
            console.log(action.payload)
            const updatedTodos = state.todos.filter(el => el._id !== action.payload)
            return {
                ...state,
                todos: updatedTodos
            }

        case 'TODO_DONE_TOGGLE':
            const toggleTodo = state.todos.map(el => {
                if (el._id === action.payload)
                    return ({
                        ...el,
                        done: !el.done
                    })
                else return el
            })
            return {
                ...state,
                todos: toggleTodo
            }

        case 'TODO_EDIT':
            const editedTodos = state.todos.map(el => {
                if (el._id === action.payload.todoId)
                    return ({
                        ...el,
                        title: action.payload.editedTodo
                    })
                else return el
            })
            return {
                ...state,
                todos: editedTodos
            }







            default:
            return state;
    }
};

export default todo;