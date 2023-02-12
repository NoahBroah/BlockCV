import React, { useContext, useState } from 'react'
import { UserContext } from "../UserContext";
import { Link, useHistory } from "react-router-dom";
import { TfiFaceSad, TfiFaceSmile } from "react-icons/tfi"
function Profile() {
    const [user, setUser] = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const v = user.verifications.find((verification) => verification.employee_id == user.id)
    const vID = v?.id


    function handleDeleteUserProfile(id) {

      console.log(vID)

      if (vID == true) {
        fetch(`/verifications/${vID}`, {
          method: "DELETE",
        }).then(res => {
          if(res.ok) {
            setUser(null)
          } else {
            res.json().then( res => setErrors([res.errors]))
          }
        })
  
  
          fetch(`/employees/${id}`, {
              method: "DELETE",
            }).then(res => {
              if(res.ok) {
                setUser(null)
                history.push('/login')
              } else {
                res.json().then( res => setErrors([res.errors]))
              }
            })
      } else {
        fetch(`/employees/${id}`, {
          method: "DELETE",
        }).then(res => {
          if(res.ok) {
            setUser(null)
            history.push('/login')
          } else {
            res.json().then( res => setErrors([res.errors]))
          }
        })
      }

     
        console.log("delete")
    }

  return (
    <div className="profile-container">
    <div className="profile-header">
      <div className="profile-name">
        <h2>Employee: {user.first_name} {user.last_name}</h2>
      </div>
      <div className="profile-email">
        <h3>{user.email}</h3>
      </div>
    </div>
    {errors.length > 0 && (
      <ul className="errors" style={{ color: "red" }}>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    )}
    <div className="profile-actions">
      <Link to="/edit_profile">Edit Profile</Link>
      <button onClick={() => handleDeleteUserProfile(user.id)}>
        Delete Profile
      </button>
    </div>
    <div className="profile-jobs">
      <h2>Jobs:</h2>
      <ul>
        {user.jobs.map((job) => {
          console.log(user.verifications);
          return (
            <Link key={job.id} to={`my_jobs/${job.id}`}>
              <li>
                {job.company}{" "}
                {user.verifications.filter(
                  (verification) => job.company === verification.company
                ) ? (
                  <TfiFaceSmile />
                ) : (
                  <TfiFaceSad />
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
    <div className="create-job">
      <Link to="/create_job">Create a new job</Link>
    </div>
  </div>
  )
}

export default Profile