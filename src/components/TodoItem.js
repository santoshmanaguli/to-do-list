import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div>
                    <h4>
                        {todo.title}
                    </h4>
                </div>
                <br />
                <div>
                    <i>
                        {todo.desc}
                    </i>
                </div>
                <br />
                <br />
                <div>
                    <button type='button' className='rounded' onClick={() => {onDelete(todo)}}>
                        Delete
                    </button>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}