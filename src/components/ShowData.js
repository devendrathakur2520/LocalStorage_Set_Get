import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../action';
import { Table } from 'react-bootstrap';

export default function ShowData() {

  const data = useSelector(state => state.SetUser.data)
  console.log("golu", data[0]);

  const onDelete = (id) => {
    const newData = data.filter(data => data.id !== id);
    localStorage.setItem('Users', JSON.stringify(newData));
    window.location.reload()
  }

  return (
    <div>
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((data, i) => (
                <tr key={i}>

                  <th>{data.name}</th>
                  <th>{data.email}</th>
                  <th>{data.phone}</th>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
                </tr>
              )
              )}
          </tbody>
        </Table>
      </>
    </div>
  )
}
