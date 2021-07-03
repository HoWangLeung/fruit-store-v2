
const initState = {
    isAuthenticated: false
}


const AuthenticationReducer = (state = initState, action) => {
    


    switch (action.type) {

        case ("UPDATE_SIGN_IN"):
  
            

            return {
                ...state,
                isAuthenticated: action.payload
            };


        default:
            return state;
    }



}

export default AuthenticationReducer