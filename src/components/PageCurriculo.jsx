import React, { useState } from 'react';
import '../css/styles.css';
import Header from './Header';
import Curriculo from './Curriculo';
import Footer from './Footer';


function PageCurriculo() {
    return (
        <div>

            <Header />
            <Curriculo />
            <Footer />

        </div>
    );
}

export default PageCurriculo;