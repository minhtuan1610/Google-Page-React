import React from "react";
import './HomePage.css';
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

function HomePage(props) {
    return (
        <div className="homePage">
            <Header {...props}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default HomePage;