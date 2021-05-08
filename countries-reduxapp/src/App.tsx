import React from "react";
import { connect } from "react-redux";
import getCountries from "./actions/CountryActions";

interface IState{}
interface IProps{
    my_fun:any;
    response:any;
}

class App extends React.Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
  }
  componentDidMount(){
    this.props.my_fun()
  }
  render(){
    const {loading,message,countries} = this.props.response
    
    return(
      <React.Fragment>
        <h5>{JSON.stringify(loading)} --- {JSON.stringify(countries)} --- {JSON.stringify(message)}</h5>
      </React.Fragment>
    )
  }
}

//subscription
const receive = (state:any)=>{
  return{
    response:state
  }
}

const send = (dispatch:any)=>{
  return{
    my_fun: ()=>{dispatch(getCountries())}
  }

}
export default connect(receive,send)(App);