import { SET_USER } from "../action";




const initialState={
data:JSON.parse(localStorage.getItem('Users')||'[]')
}
     


const getLocalStorage=(data=[])=>{
  const newData=JSON.stringify(data);
  localStorage.setItem('Users',newData)
}
export const SetUser=(state=initialState,action)=>{
  switch(action.type){
    case SET_USER:
      {
        const data= [...state.data, action.payload]
        getLocalStorage(data);
    return{
            ...state,
         data
      }
      }
    default: return state;
  }
}