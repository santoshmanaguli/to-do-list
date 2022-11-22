import React from 'react';
import { TodoItem } from './TodoItem';

export const Todo = (props) => {
    return (
        <div className="container">
            <div className='row'>
                <div className='text-center'>
                    <h2>
                        List of Task(s)
                    </h2>
                </div>
            </div>
            <div className='container'>
                {props.todos.map(todo => {
                    return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete}/>
                })}
            </div>
        </div>
        // <div>
        //     THis is Todo list 
        // </div>
    )
}