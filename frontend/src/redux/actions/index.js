import { fetchDataWithoutToken, postData } from "../../api-service/api-service";
import { GET_ALL_URLS, GET_ALL_URLS_FAILURE, GET_ALL_URLS_SUCCESS, POST_NEW_URL, POST_NEW_URL_FAILURE, POST_NEW_URL_SUCCESS, START_LOADING } from "./action-types";

export function startLoading() {
    return {
        type: START_LOADING,
    }
}
export function getAllUrlsSuccess(urls) {
    return {
        type: GET_ALL_URLS_SUCCESS,
        payload: urls
    }
}
export function getAllUrlsFailure(urls) {
    return {
        type: GET_ALL_URLS_FAILURE,
        payload: urls
    }
}
export function getAllUrls() {
    return async (dispatch)=>{
        try { dispatch(startLoading())
            const allUrls=await fetchDataWithoutToken('url');
            dispatch(getAllUrlsSuccess(allUrls))
        } catch (error) {
            dispatch(getAllUrlsFailure(error.message))
        }
    }
}


export function postNewUrlSuccess(urlData) {
    return {
        type: POST_NEW_URL_SUCCESS,
        payload: urlData
    }
}
export function postNewUrlFailure(error) {
    return {
        type: POST_NEW_URL_FAILURE,
        payload: error
    }
}

export function postNewUrl(url) {
    return async (dispatch) => {
        try {   dispatch(startLoading())
            const postUrl = await postData('url', { givenUrl: url });
            dispatch(postNewUrlSuccess(postUrl))
        } catch (error) {
            dispatch(postNewUrlFailure(error.message))
        }
    }
}

