import { createStore } from 'redux'; 
import produce from 'immer'; 

const Mystate = { 
    currDestination: [],
    currUser:{ }
} 

const reducer = produce( 
    
 (state, action) => { 
 switch (action.type) 
 { 
   case 'myDestination':{
      state.currDestination=action.payload
      break;
    }
    case 'PUT':{
      state.currDestination.push(action.payload)
    }
    case 'CurrUser':{
       state.currUser=action.payload
    }

 } 
 }, Mystate) 

const myStore = createStore(reducer);  

window.store = myStore;

export default myStore; 
