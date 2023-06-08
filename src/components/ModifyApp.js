import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import app from './../firebase';
import { getDatabase, ref, push } from 'firebase/database';

const database = getDatabase(app);
const jobRef = ref(database, '/jobs');

const ModifyApp = () =>{

    const [startDate, setStartDate] = useState(new Date());

    const [id, setId] = useState(1);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("status");
    const [rowSelect, setRowSelect] = useState("select");

    const handleChange = (e) =>{
      
        if(e.target.name === "id"){
            setId(e.target.value);
        }else if (e.target.name === "name"){
            setName(e.target.value);
        }else if (e.target.name === "position"){
            setPosition(e.target.value);
        }else{
            setUrl(e.target.value);
        }

    }

    const handleOptionChange = (e) =>{

        if(e.target.value === "rowId"){
            setRowSelect(e.target.value);
        }else{
            setSelectedOption(e.target.value);
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addToFirebase(id,name,position,url,selectedOption);
    }

    const addToFirebase = (id,name,position,url,status) =>{

        const jobObj = {
            id: id,
            company: name, 
            position: position, 
            date: startDate,
            status: status,
            url: url 
        }

        push(jobRef, jobObj);

    }

    return(
        <section className="modify">
            <h2>Modify Applications</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" min="1" placeholder="Row ID" name="id" onChange={handleChange} required />
                <input placeholder="Company Name" name="name" onChange={handleChange} required />
                <input placeholder="Position" name="position" onChange={handleChange} required />
                <input placeholder="Application URL" name="url" onChange={handleChange} required />
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} required />
                <label className="sr-only">Status</label>
                <select onChange={handleOptionChange} value={selectedOption} required>
                    <option value="status" disabled>Status</option>
                    <option value="wishlist">Wishlist</option>
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                </select>
                <button className="createBtn">Create</button>
                <div className="row">
                    <label>Row</label>
                    <select value={rowSelect} onChange={handleOptionChange}>
                        <option value="select" disabled>Select</option>
                        <option value="rowId">Row ID's</option>
                    </select>
                </div>
                <button className="updateBtn">Update</button>
                <button className="deleteBtn">Delete</button>
            </form>
        </section>
    )
}

export default ModifyApp;