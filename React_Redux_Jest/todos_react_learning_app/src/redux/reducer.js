import { initialState } from "./initial-state";
import { ADD_TODO, DELETE_TODO, TOGGLE_COMPELETED, TOGGLE_IMPORTANT } from "./actions";

import shortid from "shortid";

const saveStorageToBrowser = (state) => {
    window.localStorage.setItem("wl-todos", JSON.stringify(state))
}

const reducer = (state = initialState, action) => {
    if (action.type == ADD_TODO) {
        const { todo } = action.payload

        const newState = {
            ...state,
            todos: [...state.todos, {
                id: shortid(),
                reminder: todo,
                completed: false,
                important: false
            }],
        }
        saveStorageToBrowser(newState)
        return newState
    }
    if (action.type == TOGGLE_COMPELETED) {
        const newTodos = state.todos.map(todo => {
            if (todo.id === action.payload.id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        const newState = {
            ...state,
            todos: newTodos,
        }
        saveStorageToBrowser(newState)
        return newState
    }
    if (action.type == DELETE_TODO) {
        const { id } = action.payload

        const newTodos = state.todos.filter(todo => todo.id !== id);

        const newState = {
            ...state,
            todos: newTodos
        }
        saveStorageToBrowser(newState)
        return newState
    }
    if (action.type == TOGGLE_IMPORTANT) {
        const newTodos = state.todos.map(todo => {
            if (todo.id === action.payload.id) {
                todo.important = !todo.important
            }
            return todo
        })
        const newState = {
            ...state,
            todos: newTodos,
        }
        saveStorageToBrowser(newState)
        return newState
    }
    return state
}

export default reducer;