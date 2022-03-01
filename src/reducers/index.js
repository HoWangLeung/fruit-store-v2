import { combineReducers } from 'redux'
import AuthenticationReducer from './AuthenticationReducer'
import PaymentReducer from './PaymentReducer'
import StoreReducer from './StoreReducer'
const rootReducer = combineReducers({
    AuthenticationReducer,
    PaymentReducer,
    StoreReducer
})

export default (state, action) => {

    return rootReducer(state, action);
}
