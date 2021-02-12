import React from 'react';
import {connect} from 'react-redux';
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import './ToDoList.css'


function ToDoList(props) {

    const listOfTodos = props.todos;

    return (
        <div >
            <ul className='list-group todo-list todo-list'>
                {listOfTodos.map(el => <li className="list-group-item" key={el._id}>
                    <ToDoListItem title={el.title}
                                  done={el.done}
                                  id={el._id}/>

                </li>)}


            </ul>

        </div>

    );
}

//при помощи этой функции мы можем обращаться в Global Store
const mapStateToProps = (state) => ({
    todos: state.todos
});


export default connect(mapStateToProps, null)(ToDoList);









