import React, {useState} from 'react'
import "./ToDoListItem.css"
import {connect} from "react-redux";

function ToDoListItem(props) {

    const [editMode, setEditMode] = useState(false);
    const [editedTodo, setEditedTodo] = useState(props.title)


    const saveEdited = () => {
        props.saveEdited(props.id, editedTodo);
        setEditMode(false);

    }
    const inputHandler = (e) => {
        setEditedTodo(e.target.value);
    }

    const doneStyle = props.done === true ? {
        color: 'grey',
        textDecoration: "line-through"
    } : {
        fontWeight: 'bold',
        color: 'steelblue'
    }


    return (
        <div>
            {editMode ? (
                <span>
                    <input  type="text"
                            value={editedTodo} onChange={inputHandler}/>


                    <button className="btn btn-outline-danger btn-sm float-right" type="button" onClick={saveEdited}>Cancel</button>
                    <button className="btn btn-outline-success btn-sm float-right" type="button" onClick={saveEdited}>Save</button>
                </span>



            ) : (
                <span className="todo-list-item">
                    <span className="todo-list-item-label"  style={doneStyle} >

                            {props.title}


                        <button className="btn btn-outline-danger btn-sm float-right"
                                onClick={() => props.onDelete(props.id)}><i className="fa fa-trash-o"/></button>

                        <button className="btn btn-outline-success btn-sm float-right"
                                onClick={() => setEditMode(true)}><i className="fa fa-pencil"/></button>

                        <button className="btn btn-outline-success btn-sm float-right"
                                onClick={() => props.onDoneToggle(props.id)}>{ props.done ? <i className="fa fa-check"/> : <i className="fa fa-check"/>}</button>

                    </span>
                </span>
            )}




        </div>

    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    onDelete: (todoId) => dispatch({type: 'TODO_DELETE', payload: todoId}),
    saveEdited: (todoId, editedTodo) => dispatch({type: 'TODO_EDIT', payload: {todoId, editedTodo}}),
    onDoneToggle: (todoId) => dispatch({type: 'TODO_DONE_TOGGLE', payload: todoId }),
});

export default connect (mapStateToProps, mapDispatchToProps) (ToDoListItem);