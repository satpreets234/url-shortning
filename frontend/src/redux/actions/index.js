import { GET_ALL_URLS, POST_NEW_URL } from "./action-types";

export function getAllUrls(urls){
    return {
        type:GET_ALL_URLS,
        payload:urls
    }
}

export function postNewUrl(url){
    return {
        type:POST_NEW_URL,
        payload:url
    }
}