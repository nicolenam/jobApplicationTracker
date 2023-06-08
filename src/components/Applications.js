import app from './../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';

const database = getDatabase(app);
const jobRef = ref(database, '/jobs');

const Applications = () =>{
    
    const [jobsArray, setJobsArray] = useState([]);

    const addJobToArray = (jobs) =>{

        const newJobsArray = [];

        for(let key in jobs){
            if (jobs.hasOwnProperty(key)) {
                const job = jobs[key];

                newJobsArray.push({
                    key: key,
                    id: job.id,
                    company: job.company,
                    position: job.position,
                    status: job.status,
                    url: job.url
                });
            }
        }

        setJobsArray((prev) => [...prev, ...newJobsArray]);
    }

    useEffect(()=>{

        const fetchData = () =>{

            onValue(jobRef, (data) => {

                const jobs = data.val();
                addJobToArray(jobs);
            });
        }
        fetchData();

    },[]);

    useEffect(()=>{
        console.log("adding more", jobsArray);
    },[jobsArray]);

    return(
        <section className="applicationTable">
            <h2>Job Applications</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>company</th>
                        <th>position</th>
                        <th>date applied</th>
                        <th>status</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                 
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Applications;