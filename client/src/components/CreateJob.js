import React, { useContext, useState } from "react";
import { JobsContext } from "../JobsContext";
// import { UserContext } from "../UserContext";

function CreateJob() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [jobDuties, setJobDuties] = useState("");
  const [errors, setErrors] = useState([]);
  // const [user, setUser] = useContext(UserContext);
  const [jobs, setJobs] = useContext(JobsContext)

  function handleCreateJob(e) {
    e.preventDefault();

    const newJob = {
      company: company,
      position: position,
      job_duties: jobDuties
    };

    fetch("/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((resp) => resp.json())
      .then((job) => {
        if (job?.errors) {
          console.log("Yikes");
          setErrors([job.errors]);
        } else {
          console.log("New Job");
          setJobs(...jobs, newJob);
        }
      });
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleCreateJob}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            Create a new Job for your employer to verify
          </h3>
          <div className="form-group mt-3">
            <label>Company</label>
            <input
              type="company"
              className="form-control mt-1"
              placeholder="Enter Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Position</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Enter name of Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Job Duties</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Job Duties"
              value={jobDuties}
              onChange={(e) => setJobDuties(e.target.value)}
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

export default CreateJob;
