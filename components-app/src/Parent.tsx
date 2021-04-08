import React from "react";
import Child from "./Child";

interface IProps {}

interface IState {
    name:string;
    brand:string;
    price:number;
    qty:number;
    stockLeft:number;
    image:string;
}

class Parent extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state = {
            name:"Shirt",
            brand:"Polo",
            price:100,
            qty:3,
            stockLeft:100,
            image:"https://mean7pm.s3.ap-south-1.amazonaws.com/p1.jpg"
        }
    }

    render(){
        return(
            <React.Fragment>
                <Child  name={this.state.name}
                        brand={this.state.brand}
                        price={this.state.price}
                        qty={this.state.qty} 
                        stockLeft={this.state.stockLeft}
                        image={this.state.image}/>
                        
            </React.Fragment>
        )
    }
}
export default Parent;