import React, {useState} from "react";
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {
    const [login, setLogin] = useState(false);
    return (
        <div className="App">
            {
                login === false &&
                <>
                    <HomePage transitPage={() => setLogin(true)}/>
                </>
            }
            {
                login === true &&
                <>
                    <SignInPage/>
                </>
            }
        </div>
    );
}

export default App;
