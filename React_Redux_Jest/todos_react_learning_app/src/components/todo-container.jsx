import React from "react"
import { Box, Divider, Grid, Typography, List, ListItem } from "@material-ui/core"
import { useSelector } from "react-redux"

import { makeStyles } from "@material-ui/core"
import TodoItem from "./todo-item"

const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        backgroundColor: "rgb(92.9%,92.9%,92.9%)",
    }
}))

export default function TodoContainer() {
    const classes = useStyles()

    const { todos } = useSelector((state) => {
        return { todos: state.todos }
    })

    const priorisedTodos = (function priorise(){
        const importantTodos = []
        const notImportantTodos = []

        todos.forEach(todo => {
            if (todo.important) {
                importantTodos.push(todo)
            }else{
                notImportantTodos.push(todo)
            }
        })

        return importantTodos.concat(notImportantTodos)
    })()

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    < Typography align='left' variant="h6">Todos</Typography>
                    <Divider />
                    <List>
                        {
                            priorisedTodos.map(todo => {
                                if (!todo.completed) {
                                    return <TodoItem {...todo} />
                                }
                            })
                        }
                    </List>
                </Grid>
                <Grid item xs={6}>
                    < Typography align='left' variant="h6">Completed</Typography>
                    <Divider />
                    <List>
                        {
                            todos.map(todo => {
                                if (todo.completed) {
                                    return <TodoItem {...todo} />
                                }
                            })
                        }
                    </List>
                </Grid>
            </Grid>
        </Box>

    )
}