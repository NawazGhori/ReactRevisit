import { LOGIN, LoginTypes, LOGIN_FAIL, LOGIN_SUCCESS } from "../types/LoginTypes";
import  axios  from "axios";
import { Dispatch } from "redux";

const LoginAction = (obj:any) => {
    return async (dispatch: Dispatch<LoginTypes>) => {
        dispatch({
            loading: false,
            status: {login:""},
            error: "",
            type: LOGIN
        })

        try{
            const res = await axios.post("http://localhost:8080/login",obj);
            const { data } = res
            dispatch({
                loading: true,
                status: data,
                error: "",
                type: LOGIN_SUCCESS
            })

        }catch(err){
            dispatch({
                loading: true,
                status: {login:"fail"},
                error: err.message,
                type: LOGIN_FAIL
            })
        }

    }
}

export default LoginAction;