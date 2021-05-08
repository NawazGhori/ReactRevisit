import axios from "axios";
import { Dispatch } from "react";
import { CountryActionTypes, COUNTRY_LOADING, COUNTRY_LOADING_FAIL, COUNTRY_LOADING_SUCCESS } from "../types/CountryActionTypes";

const getCountries = () => {
    return async (dispatch: Dispatch<CountryActionTypes>) => {
        dispatch({
            loading: true,
            countries: [],
            message: "",
            type: COUNTRY_LOADING
        })

        try {
            const res = await axios.get("https://restcountries.eu/rest/v2/all");
            const { data } = res;
            dispatch({
                loading: true,
                countries: data,
                message: "",
                type: COUNTRY_LOADING_SUCCESS
            })
        } catch (err) {
            dispatch({
                loading: true,
                countries: [],
                message: err.message,
                type: COUNTRY_LOADING_FAIL
            })
        }
    }
};

export default getCountries;
