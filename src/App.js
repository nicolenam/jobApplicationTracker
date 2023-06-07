import './App.css';
import app from './firebase';
import { getDatabase, ref, set } from 'firebase/database';
import Applications from './components/Applications';
import ModifyApp from './components/ModifyApp';

const database = getDatabase(app);
const userRef = ref(database, '/users')

function App() {
  
  // const testFirebaseConfig = () =>{
  //   const userObject = {
  //     id: 1,
  //     name: "nicole",
  //     age: 36
  //   }

  //   set(userRef, userObject);
  // }

  return (
    <div className="App wrapper">
      <header>
        <h1>Job Application Tracker</h1>
        <p className="intro">Welcome! Organize all your job application in one place. <br/>
        Add, update, or delete application from the Modify Application section.
        </p>
      </header>
      <main>
        <Applications />
        <ModifyApp />
      </main>
    </div>
  );
}

export default App;
