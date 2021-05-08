import Country from "../model/Country";

export const COUNTRY_LOADING:string = "COUNTRY_LOADING";
export const COUNTRY_LOADING_SUCCESS:string = "COUNTRY_LOADING_SUCCESS";
export const COUNTRY_LOADING_FAIL:string = "COUNTRY_LOADING_FAIL";


interface CountryAsync {
    loading:boolean;
    countries:Country[];
    message:string;
}

interface CountryLoading extends CountryAsync {
    type: typeof COUNTRY_LOADING;
}

interface CountryLoadingSuccess extends CountryAsync {
    type: typeof COUNTRY_LOADING_SUCCESS;
}

interface CountryLoadingFail extends CountryAsync {
    type: typeof COUNTRY_LOADING_FAIL;
}

export type CountryActionTypes = CountryLoading | CountryLoadingSuccess | CountryLoadingFail;
