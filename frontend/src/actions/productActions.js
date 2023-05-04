import axios from "axios";
import { BACKEND_URL } from "../constants/applicationContants";
import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/constants";

export const listProducts = () => async (dispatch) => {
	dispatch({
		type: PRODUCT_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get(`${BACKEND_URL}/api/v1/user/products`);
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.data });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};
