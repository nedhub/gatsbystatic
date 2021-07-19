import React from 'react';
import { Link } from 'gatsby';
import Footer from "../components/footer";
import Header from "../components/Header";

function about() {
    return (
        <div>
            <Header/>
            <h1>About</h1>
            <p>what you talking about</p>
            
            <p>Need a developer? <Link to="/contact"> Contact me.</Link></p>
            <a href="https://www.twitter.com" >Follow me on twitter </a>

            <p>Link</p>

            <Footer/>
            
        </div>
    )
}

export default about
