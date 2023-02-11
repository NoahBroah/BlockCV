import React, { useContext, useEffect, useState } from 'react'
import { JobsContext } from '../JobsContext';
// import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";
import { Button } from 'bootstrap';


function JobView({ verifications, setVerifications}) {
  const { id } = useParams();
  const [jobs, setJobs] = useContext(JobsContext);
  const [errors, setErrors] = useState([])
  const job = jobs.find((job) => job.id == id) ?? {};


  

  return (
    <div>
      <div>
        <h2>{job.company}</h2>
        <h2>{job.position}</h2>
        <h2>{job.job_duties}</h2>
      </div>
      <div>
        {/* <button onClick={hanldeVerificationRequest}>Request Verification</button> */}
      </div>
    </div>
  )
}

export default JobView