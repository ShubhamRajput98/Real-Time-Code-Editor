import { productActions } from "./ProductSlice"
import { GetApiCall } from '../../ApiCalling/GetApiCall'

export const getData = () => {
    return async (dispatch) => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=477c40166d3c4c6fadaecafd2d2a5bea`;
        try {
            dispatch(productActions.onLoading({ data: true }));
            const response = await GetApiCall(url);
            if (response.status === 'ok') {
                dispatch(productActions.onDataLoad({ data: response }));
                dispatch(productActions.onLoading({ data: false }));
            } else {
                dispatch(productActions.onLoading({ data: false }));
            }
        } catch (e) {
            console.log(e);
        }
    }

}