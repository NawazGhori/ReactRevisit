import React, { Component } from "react";
import axios from "axios";
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

interface ProductsState {
    products: any[]
}

interface ProductsProps { }

class Products extends Component<ProductsProps, ProductsState>{
    constructor(props: ProductsProps) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/products").then((posRes)=>{
            const {data} = posRes
            this.setState({
                products: data
            })


        },(errRes)=>{
            console.log(errRes);
        })
    }
    render() {
        return (
            <React.Fragment>
                {/* {JSON.stringify(this.state.products)} */}
                <TableContainer component={Paper} className="my-table">
                    <Table size={"small"} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Brand</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Count</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>Image</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.state.products.map((ele,index)=>(
                                <TableRow key={index}>
                                    <TableCell>{ele.name}</TableCell>
                                    <TableCell>{ele.brand}</TableCell>
                                    <TableCell>{ele.quantity}</TableCell>
                                    <TableCell>{ele.countInStock}</TableCell>
                                    <TableCell>{ele.rating}</TableCell>
                                    <TableCell><Avatar src={ele.image} alt={ele.name}></Avatar></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        )
    }
}

export default Products;