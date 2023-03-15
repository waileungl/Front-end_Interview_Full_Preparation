import { Checkbox, FormControlLabel, FormGroup, IconButton, ListItem, ListItemSecondaryAction, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline'

import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_TODO, TOGGLE_COMPELETED, TOGGLE_IMPORTANT } from '../redux/actions';

export default function TodoItem({ id, reminder, completed, important }) {
    const dispatch = useDispatch();

    const toggleCheckBox = () => {
        dispatch({
            type: TOGGLE_COMPELETED,
            payload: {
                id: id,
            }
        })
    }

    const handleDeleteClick = () => {
        dispatch({
            type: DELETE_TODO,
            payload: {
                id: id,
            }
        })
    }

    const handleImportantClick = () => {
        dispatch({
            type: TOGGLE_IMPORTANT,
            payload: {
                id: id,
            }
        })
    }

    return (
        <ListItem dense>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={completed}
                            onChange={toggleCheckBox}
                            name={reminder}
                            color="primary"
                        />
                    }
                    label={
                        <Typography
                            style={{
                                textDecoration: completed ? "line-through" : null
                            }}
                        >{reminder}</Typography>
                    }
                >
                </FormControlLabel>
            </FormGroup>
            <ListItemSecondaryAction>
                <IconButton onClick={handleImportantClick} edge="end">
                    {important? <StarIcon />: <StarOutlineIcon />}
                </IconButton>
                <IconButton onClick={handleDeleteClick} edge="end">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
