import app from './../firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { useState, useEffect } from 'react';

const database = getDatabase(app);
const jobRef = ref(database, '/jobs');
const idRef = ref(database, '/lastId');

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
                    url: job.url,
                    date: job.date
                });
                trackLastId(job.id);
            }
        }
        setJobsArray(newJobsArray);
    }

    const trackLastId = (id) =>{
        console.log(id)

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

    const handleClick = (e) =>{
        console.log(e.target.id);
    }

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
                    {
                        jobsArray.map((job)=>{
                            return(
                                <tr key={job.key}>
                                    <td>{job.id}</td>
                                    <td>{job.company}</td>
                                    <td>{job.position}</td>
                                    <td>{job.date}</td>
                                    <td>{job.status}</td>
                                    <td>
                                        <button id={job.key} onClick={handleClick}>Click me</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Applications;