import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import axiosMiddleware from 'redux-axios-middleware'

import api from './services/api'

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            axiosMiddleware(api)
        )
    )
)

export default store