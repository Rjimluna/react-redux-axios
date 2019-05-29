import { combineReducers } from 'redux'
import addinformationDucks from './pages/addinformation/ducks'

export const reducer = combineReducers({
    fetchinfo: addinformationDucks
})