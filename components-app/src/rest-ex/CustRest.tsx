import axios from "axios";
import React,{Component} from "react";
interface CustRestProps{}
interface CustRestState{
    response:any
}

class CustRest extends Component<CustRestProps,CustRestState>{
    constructor(props:CustRestProps){
        super(props)
        this.state = {
            response : {}
        }
    }

    componentDidMount(){
        axios.get("https://www.w3schools.com/angular/customers.php").then(
            (posRes)=>{
                const {data} = posRes
                this.setState({
                    response: data
                })
            },(errRes)=>{
                console.log(errRes)
            })
    }

    render(){
        return(
            <React.Fragment>
                {JSON.stringify(this.state.response)}
            </React.Fragment>
        )
    }

}

export default CustRest;