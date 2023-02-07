import React, { useContext } from 'react'
import { UserContext } from "../UserContext";

function Profile() {
    const [user] = useContext(UserContext);
  return (
    <div>
        {user.first_name}
    </div>
  )
}

export default Profile