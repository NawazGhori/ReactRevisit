import React, {Component} from 'react';

interface IProps{
    name: string;
    address: string;
    course: string;
    updateCourse: ()=>any;
    updateAddress:(addressArg:string)=>any;
}
interface IState{}

class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <h1>Name:{this.props.name}</h1>
                <h1>address:{this.props.address}</h1>
                <h1>course:{this.props.course}</h1>
                <button onClick={this.props.updateCourse}>UpdateCourse</button>
                <button onClick={()=>{this.props.updateAddress('Hyderabad,India')}}>UpdateAddress</button>
            </React.Fragment>
        )
    }
}
export default Child;