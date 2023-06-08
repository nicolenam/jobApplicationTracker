import app from './../firebase';
import { getDatabase, ref, get, onValue } from 'firebase/database';
import { useState } from 'react';

const database = getDatabase(app);
const jobRef = ref(database, '/jobs');

const Applications = () =>{
    
    const [jobs, setJobs] = useState([]);

    onValue(jobRef, (data) => {

        console.log(data.val());
      

    });

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