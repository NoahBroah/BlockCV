import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext';
import { Link, useHistory } from "react-router-dom";

function EmployerProfile() {
    const [user, setUser] = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleDeleteEmployerProfile(id) {
        fetch(`/employers/${id}`, {
            method: "DELETE",
          }).then(res => {
            if(res.ok) {
              setUser(null)
              history.push('/login')
            } else {
              res.json().then( res => setErrors(res.errors))
            }
          })
        console.log("delete")
    }

  return (
    <div>
        <div>
            <div>
                <h2>Employers: {user.first_name} {user.last_name}</h2>
            </div>
            <div>
                <h3>{user.email}</h3>
            </div>
            {errors.length > 0 && (
              <ul style={{ color: "red" }}>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
            <div>
            <Link to='/edit_profile'>Edit Profile</Link> <button onClick={() => handleDeleteEmployerProfile(user.id)}>Delete Profile</button>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default EmployerProfile