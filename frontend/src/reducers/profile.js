import { PROFILE_GET_DATA } from "../actions/types";

const DEFAULT_STATE = {
    data: '',
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case PROFILE_GET_DATA:
            return {...state, data: action.payload}
        default:
            return state
    }

}