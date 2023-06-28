const initialState={
    urls:[],
    url:''
}
export default function urlReducer(state=initialState,action){
    switch(action.type){
        case "GET_ALL_URLS":
            return {
                ...state,
                urls:action.payload
            }
        case "POST_NEW_URL":
            return {
                ...state,
                urls:[...state.urls,action.payload]
            }
        default:
            return {
            ...state
            }
    }
}