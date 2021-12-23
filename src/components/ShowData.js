import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../action';

export default function ShowData() {
  const dispatch = useDispatch()
const i = 0;
  const data = useSelector(state => state.SetUser.data)
  console.log("golu",data[0]);
  // const handleCheck =(i)=>{
  //   localStorage.removeItem('Users',[i])
  // }


  //---------onDelete functionality is not working ----------

//   const onDelete=(j) =>{
//      console.log("ProductList.onDelete: ", j);
// for(i=0;i<=localStorage.Users.length;i++)
// {
//   if(i==j)
//   data= data.filter(data => data[i] !== j);
// }
//     // this.setState({products});
//     dispatch(setUser(data))
//     console.log(data);
//     localStorage.setItem('Users', JSON.parse(data));
// }

  return (
    <div>
      {
        data.map((data,i)=>(
          <>
          <li>{data.name}</li>
          <li>{data.email}</li>
          <li>{data.phone}</li>
          <label>
                  complete
                 
                </label>
          </>
        )
      
        )}
    </div>
  )
}
