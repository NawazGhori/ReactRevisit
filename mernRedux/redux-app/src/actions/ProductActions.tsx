import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductsActionTypes";

const getProducts =  () =>{
    return async(dispatch:Dispatch<ProductsActionTypes>)=>{
        dispatch({
            type: PRODUCTS_LOADING,
            loading: false,
            products: [],
            message: ""
        })


        try{
             const res = await axios.get("http://localhost:8080/products/")
             const {data} =  res;
             dispatch({
                 type: PRODUCTS_LOADING_SUCCESS,
                 loading: true,
                 products: data,
                 message: ""
             })
        }catch(err){
            dispatch({
                type:PRODUCTS_LOADING_FAIL,
                loading:false,
                products:[],
                message: err.message
            })
        }
    }
};
export default getProducts;