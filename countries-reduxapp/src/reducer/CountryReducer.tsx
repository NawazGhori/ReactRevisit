import Country from "../model/Country";
import { CountryActionTypes, COUNTRY_LOADING, COUNTRY_LOADING_FAIL, COUNTRY_LOADING_SUCCESS } from "../types/CountryActionTypes";

interface IState {
    loading:boolean;
    countries:Country[];
    message:string;
}


const initialState:IState = {
    loading:false,
    countries:[],
    message:""
}

const CountryReducer = (state=initialState,action:CountryActionTypes)=>{
    switch(action.type){
        case COUNTRY_LOADING:
        case COUNTRY_LOADING_SUCCESS:
        case COUNTRY_LOADING_FAIL:
            return{
                ...state,
                loading: action.loading,
                countries: action.countries,
                message: action.message
            }
            break;
        default:
            return state;
                
    }
}

export default CountryReducer;