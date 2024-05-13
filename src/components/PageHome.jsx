import { useState } from 'react';
import '../css/styles.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';


function PageHome() {
    return (
        <div>

            <Header />
            <Home />
            <Footer />

        </div>
    );
}

export default PageHome;