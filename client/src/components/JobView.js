import React, { useContext, useEffect, useState } from 'react'
import { JobsContext } from '../JobsContext';
// import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";


function JobView() {
  const { id } = useParams();
  const [jobs, setJobs] = useContext(JobsContext);


  const job = jobs.find((job) => job.id == id) ?? {};

  return (
    <div>
      <div>
        <h2>{job.company}</h2>
        <h2>{job.position}</h2>
        <h2>{job.job_duties}</h2>
      </div>
    </div>
  )
}

export default JobView