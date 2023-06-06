import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModifyApp = () =>{

    const [startDate,setStartDate] = useState(new Date());

    return(
        <section className="modify">
            <h2>Modify Applications</h2>
            <form>
                <input placeholder="Row ID"/>
                <input placeholder="Company Name"/>
                <input placeholder="Position"/>
                <input placeholder="Application URL"/>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <label className="sr-only">Status</label>
                <select>
                    <option selected="true" disabled="disabled">Status</option>
                    <option value="wishlist">Wishlist</option>
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                </select>
                <button className="createBtn">Create</button>
                <div className="row">
                    <label>Row</label>
                    <select>
                        <option selected="true" disabled="disabled">Select</option>
                        <option>Row ID's</option>
                    </select>
                </div>
                <button className="updateBtn">Update</button>
                <button className="deleteBtn">Delete</button>
            </form>
        </section>
    )
}

export default ModifyApp;