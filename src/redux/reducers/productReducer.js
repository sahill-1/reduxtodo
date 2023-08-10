import { actionTypes } from "../constants/actionTypes"

const initialState = {
    products: [{
        id:1,
        title:"DIPESH",
        category:"Programmer"
    }]
}
export const productReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products:payload};

        default : return state;
    }
}