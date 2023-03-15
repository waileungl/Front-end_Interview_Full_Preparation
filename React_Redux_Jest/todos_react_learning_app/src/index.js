import React from 'react'
import { createRoot } from 'react-dom/client'
import MytoDo from './app'

import { Provider } from "react-redux"
import { store } from './redux/store'

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <MytoDo />
        </Provider>
    )
}

const root = createRoot(document.getElementById('rootCanBeChange'))
root.render(<ReduxApp />)
