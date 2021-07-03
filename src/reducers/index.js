import { combineReducers } from 'redux'
import AuthenticationReducer from './AuthenticationReducer'

const rootReducer = combineReducers({
    AuthenticationReducer
})

export default (state, action) => {

    return rootReducer(state, action);
}
