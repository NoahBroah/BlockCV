import React, { useContext, useEffect, useState } from 'react'
import { JobsContext } from '../JobsContext';
// import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";
import { Button } from 'bootstrap';


function JobView() {
  const { id } = useParams();
  const [jobs, setJobs] = useContext(JobsContext);
  const [errors, setErrors] = useState([])
  const job = jobs.find((job) => job.id == id) ?? {};

  function hanldeVerificationRequest() {

    const request = {
      employer_id: null
    };

    fetch("/verifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    })
    .then((resp) => resp.json())
    .then((request) => {
      if (request.errors) {
        console.log("NOOOO");
        setErrors(request.errors)
      } else {
        console.log(request)
      }
    })
    }
  

  return (
    <div>
      <div>
        <h2>{job.company}</h2>
        <h2>{job.position}</h2>
        <h2>{job.job_duties}</h2>
      </div>
      <div>
        <button onClick={hanldeVerificationRequest}>Request Verification</button>
      </div>
    </div>
  )
}

export default JobView