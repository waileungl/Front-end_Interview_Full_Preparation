import React from 'react'

import { Box, AppBar, Toolbar, IconButton, Typography, Container, makeStyles, Paper } from "@material-ui/core"
import TodoAdder from './components/todo-adder'
import TodoContainer from './components/todo-container'

const useStyle = makeStyles(theme => ({
    root: {},
    appContainer: {
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 100,
        // backgroundColor: "red",
    },
    wrapper: {
        textAlign: 'center',
        width: '100%',
    }
}))

const MytoDo = () => {

    const classes = useStyle()

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <img alt="Todos web logo" style={{ width: "50px" }} src='wl_logo.png'></img>
                    </IconButton>
                    <Typography variant='h6'>Todos</Typography>
                </Toolbar>
            </AppBar>

            <Container className={classes.appContainer}>
                <Paper className={classes.wrapper} elevation={0}>
                    <TodoAdder />
                    <TodoContainer />
                </Paper>
            </Container>
        </Box>
    )
}


export default MytoDo