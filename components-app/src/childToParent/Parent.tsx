import React, { Component } from 'react';
import Child from './Child';


interface IProps { }
interface IState {
    name: string;
    address: string;
    course: string;
}

class Parent extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            name: "AshokIT",
            address: "Hyderabad",
            course: "ReactJS"
        }        
    }

    updateCourse = ()=>{
        this.setState({
            course: "ReactJS with Typescript"
        })   
    }

    updateAddress = (addressArg:string)=>{
        this.setState({
            address: addressArg
        })
    }
    render() {
        return (
            <React.Fragment>                
                <Child name={this.state.name}
                        address={this.state.address}
                        course={this.state.course}
                        updateCourse={this.updateCourse}
                        updateAddress={this.updateAddress}/>
            </React.Fragment>
        )
    }
}
export default Parent;