import React,{Component} from 'react';
interface IState{}
interface IProps{
    key1: any
}

class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        console.log("child constructor");
        super(props)
    }

    componentWillMount(){
        console.log("child componentWillMount")
    }

    render(){
        console.log("child render")
        return(
            <React.Fragment>
                {this.props.key1}
            </React.Fragment>
        )
    }

    componentDidMount(){
        console.log("child componentDidMount")
    }

    componentWillReceiveProps(nextProps:any){
        console.log("child componentWillRecieveProps")
    }

    shouldComponentUpdate(){
        return false;
    }

}
export default Child;