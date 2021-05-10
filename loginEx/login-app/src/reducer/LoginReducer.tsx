import LoginModel from "../model/Login";
import { LOGIN, LoginTypes, LOGIN_FAIL, LOGIN_SUCCESS } from "../types/LoginTypes";


interface IState{
    loading:boolean;
    status :LoginModel;
    error:string;
}
const intialState:IState = {
    loading:false,
    status :{"login":""},
    error:""
}
const LoginReducer = (state=intialState,action:LoginTypes)=>{
    switch(action.type){
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_FAIL:
            return{
                ...state,
                loading: action.loading,
                status: action.status,
                error: action.error
            }
        break;
        default: {
            return state;
        }
    }
}
export default LoginReducer;