import { combineReducers } from 'redux'
import counterReducer from './reducer/counterReducer'

const rootReduxer = combineReducers({
    counterReducer
})

export default rootReduxer