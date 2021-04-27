//store
//initialState
//reducer
//dispatch  =>   (action has type  and payload)
//subscribe =>   (getState)



//import createStore function
//createStore function available in redux library
//require() is the predefined function, used to import
const {createStore} = require("redux");


//create the initial state
//we will create initial state by using json object
const initialState = {
    age: 20
}

//create the reducer
//callback function behaves like reducer
//@state        @action
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age: state.age + action.payload
            }
            //break;
        case "AGE_DOWN":
            return{
                ...state,
                age: state.age - action.payload
            }
           // break;
        default:
            return state;
    }
}

//create the store
const store = createStore(reducer);

//subscription
store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch
store.dispatch({type:"AGE_UP",payload:15})
store.dispatch({type:"AGE_DOWN",payload:10})

