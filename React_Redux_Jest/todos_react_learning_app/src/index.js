import React from 'react'
import ReactDom from 'react-dom'
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



ReactDom.render(<ReduxApp />, document.getElementById('rootCanBeChange'))