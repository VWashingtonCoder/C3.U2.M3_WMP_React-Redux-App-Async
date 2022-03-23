import axios from "axios"

// action-type
const GET_NEW_ACTIVITY = "GET_NEW_ACTIVITY"

//action-creator
export const getNewActivity = () => dispatch => {
    axios.get("https://www.boredapi.com/api/activity")
        .then(res => {
            dispatch({ type: GET_NEW_ACTIVITY, payload: res.data })
        })
        .catch(err =>{
            debugger
        })
}

//reducer
const initialState = {
    activity: []
}
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_NEW_ACTIVITY:
            return({
                activity: action.payload
            })
        default:
            return state
    }
}

export default reducer