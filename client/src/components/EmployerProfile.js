import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { JobsContext } from "../JobsContext";
import { Link, useHistory } from "react-router-dom";

function EmployerProfile({ setVerifications, verifications }) {
  const [user, setUser] = useContext(UserContext);
  const [jobs, setJobs] = useContext(JobsContext);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleDeleteEmployerProfile(id) {
    fetch(`/employers/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
        history.push("/login");
      } else {
        res.json().then((res) => setErrors(res.errors));
      }
    });
    console.log("delete");
  }

  function handleVerify(eId, jId) {
    const request = {
      employee_id: eId,
      is_verified: true,
    };

    fetch("/verifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then((resp) => resp.json())
      .then((request) => {
        if (request.errors) {
          console.log("NOOOO");
          setErrors([request.errors]);
        } else {
          console.log(request);
          setVerifications([...verifications, request]);
        }
      });
      

    fetch(`/jobs/${jId}`, {
      method: "PATCH",
      header: { "Content-Type" : "application/json"},
      body: JSON.stringify({ verified: true }),
    })
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp?.errors) {
        setErrors(resp.errors)
        console.log("try again")
      } else {
        console.log(resp)
        console.log(jobs)
      }
    })
  }
  return (
    <div className="employerProf">
      <div>
        <div>
          <h2>
            Employers: {user.first_name} {user.last_name}
          </h2>
        </div>
        <div>
          <h3>{user.email}</h3>
          <h3>{user.company}</h3>
        </div>
        <div>
          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <Link to="/edit_profile">Edit Profile</Link>{" "}
          <button onClick={() => handleDeleteEmployerProfile(user.id)}>
            Delete Profile
          </button>
        </div>
        <div>
          <div>
            {jobs
              .filter((job) => job.company.includes(`${user.company}`&& job.verified !== true ))
              .map((filteredJob) => (
                <div key={filteredJob.id}>
                  <ul>
                    <li>
                      {filteredJob.employee.first_name}{" "}
                      {filteredJob.employee.last_name}
                    </li>
                    <a>{filteredJob.position}</a>
                    <a>{filteredJob.job_duties}</a>
                  </ul>
                  <div>
                    <button
                      onClick={() => handleVerify(filteredJob.employee.id, filteredJob.id)}
                    >
                      Verify
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerProfile;
