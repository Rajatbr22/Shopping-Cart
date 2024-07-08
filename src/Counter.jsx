import React from 'react'
import { useState } from 'react';


export default function Counter(){
    // const [isEditing, setIsEditing] = useState(false);

    // return (
    //     <>  
    //         {
    //             (isEditing) ? <input/> : <p>some todo</p>
    //         }
    //         <br />
    //         <button onClick={() => setIsEditing(!isEditing)}>Click me</button>
    //     </>
    // )

    const [todos, setTodos] = useState(['todo 1', 'todo 2'])
    return(
        <ul>
            {todos.map((todo) => <li>{todo}</li>)}
            <button onClick={() => setTodos([...todos, <input/>])}>Click</button>
        </ul>
    )
}
