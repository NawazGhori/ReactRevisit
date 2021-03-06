import React from 'react';
import Child from './Child';
interface IState{
  key1:string;
  key2: any;
}

interface IProps{

}

class App extends React.Component<IProps,IState>{

  //when ever we create the component, automatically "constructor" will execute
  //constructor will execute "only" once
  //in constructor generally we will receive "props" and we can initilize "state" also
  constructor(props:IProps){
    super(props)
    console.log("parent constructor")
    this.state = {
      key1: "Hello_1",
      key2: ""
    }
  }

  //some times we may change the state, based on state & props
  //if you want to change state after constructor, then recomended life cycle hook is componentWillMount()
  //it's recomended to change state here by using setState() function
  //in general we will configure global parameters like "width" and "height" also
  componentWillMount(){
    console.log("parent componentWillMount")
    console.log(window.innerWidth)
    if(window.innerWidth < 800 ){
       this.setState({
        key2: window.innerWidth
      }) 
    }   
  }

  updateState = ()=>{
    this.setState({
      key1: "ReactJS"
    })
  }

  shouldComponentUpdate(){
    return true;//if false then setState will not work i.e, state wont update
  }

  //after componentWillMount() automatically render() life cycle hook will execute
  //this life cycle hook is "mandatory" life cycle hook
  //in general we will place "presentation" logic here
  //when ever change detected in state, automatically "render()" function will execute
  //never use "setState()" function here
  render(){
    console.log("parent render")
    return(
      <React.Fragment>
        key1: {this.state.key1}<br/><br/>
        key2: innerWidth is {this.state.key2}<br/><br/>
        <Child key1={this.state.key1}/><br/><br/>
        <button onClick={this.updateState}>Update state</button>

      </React.Fragment>
    )
  }


  //after render() life cycle hook, automatically componentDidMount() life cycle hook will execute
  //in general, in componentDidMount() will make rest api calls
  //in general, we will change state also here based on rest api response
  componentDidMount(){
      console.log("parent componentDidMount");
  }

  componentWillReceiveProps(nextProps:any){
    console.log("parent componentWillReceiveProps")
  }
  
}

export default App;