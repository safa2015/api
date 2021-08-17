import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
//import { Link } from "react-router-dom";
const UserDetail = ({match}) => {
    const [user, setUser] = useState({

    })
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      axios.get (`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
    .then(res => {setUser(res.data);setLoading(false)})
    .catch(err=>console.log(err))
}, [match.params.id])
if (loading) {
    return <Spinner animation="border" variant="white" />;
}
    return (
        <div>
                              
            <p>{user.username}</p>
            <p>{user.email}</p> 
            

            
           

        </div>
    )
}

export default UserDetail
