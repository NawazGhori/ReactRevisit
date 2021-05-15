
import { put,call } from "@redux-saga/core/effects"
import axios from "axios";
export function *getData(){
    //delay(5000)
    const res = yield call(getEmployees)
    yield put({type:"EMPLOYEES",value:res})

}

function getEmployees(){
    return axios.get("https://www.w3schools.com/angular/customers.php")
};