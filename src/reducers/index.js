import { combineReducers } from 'redux'
import AuthenticationReducer from './AuthenticationReducer'
import PaymentReducer from './PaymentReducer'
const rootReducer = combineReducers({
    AuthenticationReducer,
    PaymentReducer
})

export default (state, action) => {

    return rootReducer(state, action);
}
