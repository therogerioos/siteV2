import React, { useState } from 'react';
import '../css/styles.css';
import Header from './Header';
import Tutoriais from './Tutoriais';
import Footer from './Footer';


function PageTutoriais() {
    return (
        <div>

            <Header />
            <Tutoriais />
            <Footer />

        </div>
    );
}

export default PageTutoriais;