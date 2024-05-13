import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import Header from './Header';
import Footer from './Footer';

const PagePostPortfolio = () => {
    const { link } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const fetchMarkdownContent = async () => {
            try {
                const response = await fetch(`/posts/${link}.md`);
                const markdownText = await response.text();
                setMarkdownContent(markdownText);
            } catch (error) {
                console.error('Erro ao carregar o conteúdo do post:', error);
            }
        };

        fetchMarkdownContent();
    }, [link]);

    return (
        <div >
            <Header />
            <Link to={`/portfolio/`} style={{ textDecoration: 'none' }}>
                <Button className='button-retorno' variant="contained" style={{fontFamily: 'League Spartan', backgroundColor: '#181c23'}}>Retornar</Button>
            </Link>
            <div className="post-completo">
                    <ReactMarkdown className="box-post-completo">{markdownContent}</ReactMarkdown>
            </div>
            <Footer />
        </div>
    );
};

export default PagePostPortfolio;
