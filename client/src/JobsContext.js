import { createContext, useEffect, useState } from "react";

const JobsContext = createContext([]);

const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/jobs").then((resp) => {
          if (resp.ok) {
            resp.json().then((jobs) => setJobs(jobs));
          } else {
            console.log("Not good")
          }
        });
      },[] );

    return (
        <JobsContext.Provider value={[ jobs, setJobs ]}>
            { children }
        </JobsContext.Provider>
    );
}

export {JobsContext, JobsProvider}