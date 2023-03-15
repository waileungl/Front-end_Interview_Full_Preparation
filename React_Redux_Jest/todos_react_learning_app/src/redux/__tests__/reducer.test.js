//first step: mock out all the library imported, because we don't want to test these library

jest.mock("../initial-state", () => {
    return {
        initialState: {
            todos: [],
        },
    }
})

import { act } from "react-dom/test-utils";
import reducer from "../reducer";

describe("Reducer", () => {

    //run this function before every test is executing
    beforeEach(() => {
        //mock the window object, because in test scope is not browser environment
        global.window = {
            localStorage: {
                setItem: jest.fn(),
            }
        }
    })

    afterEach(() => {
        global.window = null;
    })

    //always put should in front of the test name to clearly define what the test is
    test("should add a todo item", () => {

        const initialState = {
            todos: [],
        }

        const action = {
            type: "ADD_TODO",
            payload: {
                todo: "Read a book"
            },
        }

        const newState = reducer(initialState, action)

        expect(newState.todos[0].reminder).toEqual("Read a book")

    })

    test("should mark todo as completed", () => {
        const initialState = {
            todos: [
                {
                    id:"12345",
                    reminder: "Drink water",
                    completed: false,
                    important: false,
                },
                {
                    id:"12346",
                    reminder: "Eat chicken",
                    completed: false,
                    important: false,
                },
            ]
        }

        const action = {
            type: "TOGGLE_COMPELETED",
            payload: {
                id: "12345"
            }
        }

        const newState = reducer(initialState, action)

        expect(newState.todos[0].completed).toBeTruthy()
    })
})