import React, { useState, useEffect } from 'react'

const JobsList = () => {
    const [jobList, setJobList] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         //code here
    //         // your URL is http://localhost:3001/jobs, but you should use the env variable, so something like:
    //         // const url = `${REACT_APP_BACKEND_SERVER_URL}/jobs`
    //     };
    //     fetchData();
    // }, []);

    useEffect(() => {
        async function FetchJobs() {
            const response = await fetch('http://localhost:3001/jobs')
            const json = await response.json()
            console({ json })
        }
        FetchJobs()
    }, [])

    return (
        <div>All jobs here</div>
    )

}

export default JobsList