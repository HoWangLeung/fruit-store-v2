
const initState = {
    paymentInfo: []
}


const PaymentReducer = (state = initState, action) => {



    switch (action.type) {

        case ("SET_PAYMENT_DETAIL"):



            return {
                ...state,
                paymentInfo: action.payload
            };


        default:
            return state;
    }



}

export default PaymentReducer