const initialState = {
    boredthing: {}
}

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case 'GET_BORED_THING':
            return {
                ...state,
                boredthing: action.payload.data
            }
        default:
            return state
    }
}
