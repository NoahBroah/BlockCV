import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from "../UserContext";

function Profile() {
    const [user] = useContext(UserContext);

    function handleDeleteUserProfile() {
        // fetch(`/employees`, {
        //     method: "DELETE",
        //   }).then(res => {
        //     if(res.ok) {
        //       setNotes(notes.filter((note) => note.id !== id))
        //     } else {
        //       res.json().then( res => setErrors(res.errors))
        //     }
        //   })
        console.log("delete")
    }
  return (
    <div>
        <div>
            <div>
                <h2>Employee: {user.first_name} {user.last_name}</h2>
            </div>
            <div>
                <h3>{user.email}</h3>
            </div>
            <div>
                <button>Edit Profile</button> <button onClick={handleDeleteUserProfile}>Delete Profile</button>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Profile