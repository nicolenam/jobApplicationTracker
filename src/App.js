import './App.css';
import app from './firebase';
import { getDatabase, ref, push, set } from 'firebase/database';

const database = getDatabase(app);
const dbRef = ref(database);
const userRef = ref(database, '/users')

function App() {
  
  const testFirebaseConfig = () =>{
    const userObject = {
      id: 1,
      name: "nicole",
      age: 36
    }

    set(userRef, userObject);
  }

  return (
    <div className="App">
      <header>
        <h1>Job Application Tracker</h1>
        <p>Welcome! Organize all your job application in one place. <br/>
        Add, update, or delete application from the Modify Application section.
        </p>
        <button onClick={testFirebaseConfig}>test</button>
      </header>
    </div>
  );
}

export default App;
