import React, {useState} from "react";
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {
    const [goLogin, setgoLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log("goLoginPage: " + goLogin);

    console.log("isLoggedIn: " + isLoggedIn);

    const goLoginPage = () => {
        return (
            setgoLogin(!goLogin)
        );
    }
    const signedIn = () => {
        return (
            setIsLoggedIn(!isLoggedIn) &
            setgoLogin(!goLogin)
        );
    }
    const signedOut = () => {
        return (
            setIsLoggedIn(!isLoggedIn)
        );
    }

    return (
        <div className="App">
            {(goLogin === false) ? <HomePage goLoginPage={goLoginPage}
                                             isLoggedIn={isLoggedIn}
                                             isLoggedOut={signedOut}/> : <SignInPage isLoggedIn={signedIn}/>}
        </div>
    );
}

export default App;
