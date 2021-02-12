import React, {useState} from 'react'
import {connect} from 'react-redux';
import './Create.css'


function Create(props) {

    //пустой массив для деструктуризации, чтобы ничего не сломалось default value = []
    const {todos = [],} = props;

    const [newTask, setNewTask] = useState('')

    const onInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTodo = () => {
        props.addTodo(newTask)
        setNewTask('')
    };

    return (

            <div className="form-group">

                <input type="text"
                       className="form-control new-todo-label"
                       value={newTask}
                       onChange={onInputChange}
                       placeholder="Create new task"  />

                <button type="submit" className="btn btn-outline-secondary float-right"
                        onClick={addTodo}>Add</button>



            </div>

    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (newTask) => dispatch( {type: "ADD_TODO", payload: newTask} )
})

export default connect(mapStateToProps, mapDispatchToProps) (Create);