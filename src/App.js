import React, {useEffect, useState} from "react";
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {
    const [goLogin, setGoLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [usr, setUsr] = useState('');
    const [pw, setPw] = useState('');

    console.log("goLoginPage: " + goLogin);

    console.log("isLoggedIn: " + isLoggedIn);

    const goLoginPage = () => {
        return (
            setGoLogin(!goLogin)
        );
    }
    const signedIn = () => {
        setIsLoggedIn(!isLoggedIn)
        setGoLogin(!goLogin)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('Username', usr)
        localStorage.setItem('Password', pw);
    }
    const signedOut = () => {
        setIsLoggedIn(!isLoggedIn)
        localStorage.setItem('isLoggedIn', 'false')
        localStorage.removeItem('Username')
        localStorage.removeItem('Password');
    }
    const inputUsr = (e) => {
        return (
            setUsr(e.target.value)
        );
    }
    const inputPw = (e) => {
        return (
            setPw(e.target.value)
        );
    }
    useEffect(() => {
        setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')));
    }, []);

    return (
        <div className="App">
            {(goLogin === false) ? <HomePage goLoginPage={goLoginPage}
                                             isLoggedIn={isLoggedIn}
                                             isLoggedOut={signedOut}/> :
                <SignInPage inputUsr={inputUsr} inputPw={inputPw} isLoggedIn={signedIn}/>}
        </div>
    );
}

export default App;
