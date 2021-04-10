// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import React, { Component } from "react";
import Customers from "../model/Customers";
interface CustRestProps { }
interface CustRestState {
    response: Customers,
    rows: any
}

class CustRest extends Component<CustRestProps, CustRestState>{
    constructor(props: CustRestProps) {
        super(props)
        this.state = {
            response: { records: [] },
            rows: []
        }
    }

    componentDidMount() {
        axios.get("https://www.w3schools.com/angular/customers.php").then(
            (posRes) => {
                const { data } = posRes
                this.setState({
                    response: data,
                    rows: data.records
                })
            }, (errRes) => {
                console.log(errRes)
            })

        console.log(this.state.rows)
    }
    // useStyles = makeStyles({
    //     table: {
    //       minWidth: 650,
    //     },
    //   });
    // classes = useStyles();
    render() {
        return (
            <React.Fragment>
                {/* {JSON.stringify(this.state.response)} */}

                <TableContainer component={Paper}>
                    <Table  className="table" aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Country</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((r:any)=>( 
                            <TableRow key={r.name}>
                                <TableCell component="th" scope="row" >{r.Name}</TableCell>
                                <TableCell>{r.City}</TableCell>
                                <TableCell>{r.Country}</TableCell>
                            </TableRow>
                        ))}

                        </TableBody>
                    </Table>

                </TableContainer>
            </React.Fragment>
        )
    }

}

export default CustRest;