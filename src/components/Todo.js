import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { adduser, setUser } from '../action';


const AddUser= () =>{

       
        const dispatch = useDispatch ();
        const Adduser = useSelector((state) => state.AddUsers.data);
        const userdata = useSelector((state) => state.SetUser.data)
        console.log("data",userdata);
        const{name,email,phone}=Adduser;

        const InputChange = (event) =>{
        dispatch(adduser({...Adduser,[event.target.name]:event.target.value}));
    };
 
    
          const onSubmit = async(event)=>{
            event.preventDefault();
            dispatch(setUser(Adduser))
            console.log(Adduser);
        
           
        };

        return(
            <div>
                <form onSubmit={onSubmit}>

                <div> 
                  <h1> Todo APP</h1>
                    <label>Name:
                        <input type="text" name="name" value={name} autoComplete="off"
                        onChange={e=>InputChange(e)}/>
                    </label>
                    </div>

                    <div> 
                    <label>Email:
                        <input type="text" name="email" value={email} autoComplete="off"
                        onChange={e=>InputChange(e)}/>
                    </label>
                    </div>

                    <div>
                    <label>Phone:
                        <input type="text" name="phone" value={phone} autoComplete="off"
                        onChange={e=>InputChange(e)}/>

                    </label>
                    </div>

                  
    
                  <div>
                      <input type="submit" value="submit"/>
                  </div>
                </form>
            </div>
        )
}
export default AddUser;