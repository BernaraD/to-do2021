import './App.css';
import React, {useState} from 'react';
import ToDoList from "../ToDoList/ToDoList";
import AppHeader from "../App Header/App-Header";
import {v4 as uuidv4} from 'uuid';
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatus from "../Item-Status/Item-Status";
import Create from "../CreateNew/Create";

//
// const initialTodos = [
//
//     {_id: Math.random(), title: 'Build react app', done: true },
//     {_id: Math.random(), title: 'Drink coffee', done: false },
//     {_id: Math.random(), title: 'Call mom', done: false},
//
// ];

function App() {

    // const [todos, setTodos] = useState(initialTodos);

    // const addNewTask = (newTask) => {
    //     console.log(newTask)
    //     let updatedTasks = {
    //         _id: Math.random(),
    //         title: newTask,
    //         done: false,
    //         important: false
    //     }
    //     const newTodos = [...todos, updatedTasks]
    //     setTodos(newTodos);
    // };


    // const onDelete = (todoId) => {
    //     const updatedTodos = todos.filter(el => el._id !== todoId)
    //     setTodos(updatedTodos)
    // };
    //
    // const onDoneToggle = (todoId) => {
    //     const updatedTodos = todos.map(el => {
    //         if (el._id === todoId)
    //             return {...el, done: !el.done}
    //         else return el
    //     })
    //     setTodos(updatedTodos)
    // };
    //
    // const onEdit = (todoId, editedTodo) => {
    //     const updatedTodos = todos.map(el => {
    //         if (el._id === todoId)
    //             return {...el, title: editedTodo}
    //         else return el
    //     })
    //     setTodos(updatedTodos)
    // }

    return (
        <div classname="App">


            <div className="todo-app">
                <span>{(new Date()).toString()}</span>

                <AppHeader/>

                <Create/>
                {/*<div className="top-panel d-flex">*/}
                {/*    <SearchPanel />*/}
                {/*</div>*/}

                <ItemStatus/>
                <ToDoList/>

            </div>
        </div>
    );
}

export default App;
