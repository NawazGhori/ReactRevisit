import React, {Component} from "react";
import {BrowserRouter,NavLink,Route} from "react-router-dom";
import CartScreen from "./CartScreen";
import HomeScreen from "./HomeScreen";
import ProductScreen from "./ProductScreen";

interface IState{}
interface IProps{}
class MyApp extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <React.Fragment>
                    <NavLink to="/home" style={{marginRight:10}} exact={true} strict>Home</NavLink>
                    <NavLink to="/products" style={{marginRight:10}} exact={true} strict>Products</NavLink>
                    <NavLink to="/cart" exact={true} strict>Cart</NavLink>

                    <br/><br/><br/>

                    <Route path="/home" component={HomeScreen} exact={true} strict></Route>
                    <Route path="/products" component={ProductScreen} exact={true} strict ></Route>
                    <Route path="/cart" component={CartScreen} exact={true} strict></Route>
                </React.Fragment>
            </BrowserRouter>
        )

    }
}

export default MyApp;