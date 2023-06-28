const initialState={
    urls:[],
    url:'',
    loading:false,
    error:''
}
export default function urlReducer(state=initialState,action){
    switch(action.type){
        case "GET_ALL_URLS":
            return {
                ...state,
                urls:action.payload
            }
        case "GET_ALL_URLS_SUCCESS":
            return {
                ...state,
                urls:action.payload,
                loading:false
            }
        case "GET_ALL_URLS_FAILURE":
            return {
                ...state,
                urls:action.payload,
                loading:false
            }
        case "POST_NEW_URL":
            return {
                ...state,
                error:'',
            }
        case "POST_NEW_URL_SUCCESS":
            return {
                ...state,
                error:'',
                loading:false,
                urls:[...state.urls,action.payload]
            }
        case "POST_NEW_URL_FAILURE":
            return {
                ...state,
                error:action.payload,
                loading:false,
                urls:state.urls
            }
        case "START_LOADING":
            return {
                ...state,
                loading:true,
            }
        default:
            return {
            ...state
            }
    }
}