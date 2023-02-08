import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

function EditProfiles() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);

  function handleEditUserProfile(e) {
    e.preventDefault();

    const editedUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    };

    {user.is_employer === false ? 
        fetch(`/employees/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedUser),
          })
            .then((resp) => resp.json())
            .then((user) => {
              if (user?.errors) {
                setErrors(user.errors);
              } else {
                setUser(user);
                console.log("employee");
              }
            })
            :
            fetch(`/employers/${user.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editedUser),
              })
                .then((resp) => resp.json())
                .then((user) => {
                  if (user?.errors) {
                    setErrors(user.errors);
                  } else {
                    setUser(user);
                    console.log("Employer");
                  }
                });
    }

    
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleEditUserProfile}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Edit Profile</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="firstName"
              className="form-control mt-1"
              placeholder={user.first_name}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="lastName"
              className="form-control mt-1"
              placeholder={user.last_name}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder={user.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder={user.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfiles;
