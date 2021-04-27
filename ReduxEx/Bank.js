// store
// reducer
//initialState
//State
//type(actions)
//payload(value)
//dispatch
//subscribe


//import createStore function
//createStore function available in redux library
//require() is the predefined function, used to import
const {createStore} = require('redux');

//create the initial state
//we will create initial state by using json object
const initialState = {
    bal: 10000
}

//create the reducer using a callback function
//callback function behaves 1like reducer
//@state        @action
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return {
                ...state,
                bal: state.bal - action.payload
            }  
            //break;  
        case "DEPOSIT":
            return {
                ...state,
                bal: state.bal + action.payload
            } 
            //break;
        default:
            return state;
    }
   

}

//create the store
const store = createStore(reducer);

//access the result using subscription to store
store.subscribe(()=>{   
    console.log(store.getState());
});


//dispatch
store.dispatch({type:"WITHDRAW",payload:5000})
store.dispatch({type:"DEPOSIT",payload:10000})

