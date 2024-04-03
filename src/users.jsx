import { useEffect, useState } from "react";

export default function Users() {
    const [users, serUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => serUsers(data))
    },[])


    const PlyersStyle ={
        border: '2px solid purple',
        mergin: '20px',
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '20px' 
    };
   

    return (

        <div style={PlyersStyle}>
            <h1>Users: {users.length}</h1>
            {
                users.map(user => <div style={PlyersStyle} key={user.id}>
                         
                   <h1>Name: {user.name}</h1>
                   <p>Email: {user.email}</p>
                </div>)
            }
        </div>
    )
};

















