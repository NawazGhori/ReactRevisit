import Product from "../modal/Product";

export const PRODUCTS_LOADING:string = "PRODUCTS_LOADING";
export const PRODUCTS_LOADING_SUCCESS:string = "PRODUCTS_LOADING_SUCCESS";
export const PRODUCTS_LOADING_FAIL:string = "PRODUCTS_LOADING_FAIL";

interface ProductsAsync{
    products:Product[];
    message:string;
    loading:boolean;
};

interface ProductsLoading extends ProductsAsync {
    type: typeof PRODUCTS_LOADING;
}

interface ProductsLoadingSuccess extends ProductsAsync{
    type: typeof PRODUCTS_LOADING_SUCCESS;
}

interface ProductsLoadingFail extends ProductsAsync{
    type: typeof PRODUCTS_LOADING_FAIL;
}


//export types
export type ProductsActionTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail;