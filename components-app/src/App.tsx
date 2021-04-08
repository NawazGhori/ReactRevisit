import React from 'react';

//state - predefined object used to define the component data
// we will define  state by using interfaces
interface IState{
  sub:string
}

interface IProps{}

class App extends React.Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
      this.state ={
        sub: "ReactJS"
      }
     
    }

    my_fun = ()=>{
      this.setState({
        sub : "ReactJS with Typescript"
      })  
    };
    render(){
      return(
        <React.Fragment>
          <h1>state:{this.state.sub}</h1><br/>
          <button onClick={this.my_fun}>Change State</button>
        </React.Fragment>
      )
    }

}

export default App;