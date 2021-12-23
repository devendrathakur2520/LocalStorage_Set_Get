import { ADD_USER } from "../action";

const initialState={
  data:{
    name:"",
  email:"",
  phone:"",
  },

}

export const AddUsers=(state=initialState,action)=>{
  switch(action.type){
    case ADD_USER:
    
      return{
            ...state,
            data:action.payload
      }
    default:
          return state;
  }
}