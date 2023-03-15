import { TextField, Button } from '@material-ui/core'
import { useDispatch } from "react-redux"
import React, { useState } from 'react'

import { ADD_TODO } from "../redux/actions"

export default function TodoAdder() {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()

    const toggleCompleted = (e) => {
        setTodo(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault()
        if(todo == "") return
        // Todo: dispatch the ADD_TODO redux action here
        dispatch({
            type: ADD_TODO,
            payload: {
                todo,
            },
        });
        setTodo("")
        //come back here once the todo items are listed
    }

    return (
        <form onSubmit={addTodo}>
            <TextField
                label="Add new todo"
                style={{ width: 400, }}
                onChange={toggleCompleted}
                value={todo}
            ></TextField>
            <Button
                variant="contained"
                style={{ height: 52, }}
                color='primary'
                onClick={addTodo}
            >Add</Button>
        </form>
    )
}