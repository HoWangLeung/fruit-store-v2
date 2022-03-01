
const initState = {
    cart:JSON.parse(localStorage.getItem("cart"))
}


const StoreReducer = (state = initState, action) => {
    

    switch (action.type) {

        case ("UPDATE_STORE"):
                //console.log("UPDATE_STORE");
            

            return {
                ...state,
                cart: action.payload
            };


        default:
            return state;
    }



}

export default StoreReducer