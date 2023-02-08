import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

function EmployerProfile() {
    const [user] = useContext(UserContext);

    function handleDeleteEmployerProfile() {
        console.log("Delete!")
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
            <div>
                <button>Edit Profile</button> <button onClick={handleDeleteEmployerProfile}>Delete Profile</button>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default EmployerProfile