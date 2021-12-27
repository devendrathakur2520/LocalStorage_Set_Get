import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adduser, setUser } from '../action';
import { InputGroup, Form, FormControl } from 'react-bootstrap'
const AddUser = () => {

    const dispatch = useDispatch();
    const Adduser = useSelector((state) => state.AddUsers.data);
    const userdata = useSelector((state) => state.SetUser.data)
    console.log("data", userdata);
    const { name, email, phone } = Adduser;

    const InputChange = (event) => {
        dispatch(adduser({ ...Adduser, [event.target.name]: event.target.value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(setUser(Adduser))
        console.log(Adduser);
        window.location.reload()
    };

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <div>
                    <h1> Todo APP</h1>

                    <label>Name: </label>
                    <input type="text" name="name" value={name}
                        autoComplete="off"
                        onChange={e => InputChange(e)} />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={email}
                        autoComplete="off"
                        onChange={e => InputChange(e)} />
                </div>

                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={phone}
                        autoComplete="off"
                        onChange={e => InputChange(e)} />
                </div>

                <div>
                    <input type="submit" className="btn btn-primary" value="submit" />


                </div>
            </Form>
        </div>
    )
}
export default AddUser;