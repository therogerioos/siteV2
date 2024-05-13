import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import jsonData from '../json/tutoriaisResumo.json';



function Tutoriais() {

    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    const handleChange = (event, value) => {
        setPage(value);
    };

    const [contentTutoriais, setContentTutoriais] = useState([]);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, contentTutoriais.length);

    const itemsForPage = contentTutoriais.slice(startIndex, endIndex);

    useEffect(() => {
        setContentTutoriais(jsonData);
    }, []);

    return (
        <div>
            <section className="section-pages-post-portfolio">
                <h2 className='name-title'>Blog e Tutoriais</h2>
                <Pagination sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#ffff', // Cor do número da página
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                        backgroundColor: '#ffff', // Cor de fundo do número da página ativa
                        color: '#181c23', // Cor do número da página ativa
                    },
                    '& .MuiPaginationItem-ellipsis': {
                        color: '#ffff', // Cor dos pontos de elipses
                    }, 
                    '& .MuiPaginationItem-root:hover': {
                        backgroundColor: '#181c23', // Cor de fundo do número da página quando passar o mouse
                        color: '#ffff',
                    },
                }} className='pagination-portfolio' count={Math.ceil(contentTutoriais.length / itemsPerPage)} page={page} onChange={handleChange} />
                {itemsForPage.map((item, index) => (
                    <div className="card-post-text-portfolio" key={index}>
                        <Link to={`/tutoriais/${item.link}`} style={{ textDecoration: 'none' }}>
                            <Card sx={{ minWidth: 350, maxWidth: 350, backgroundColor: '#181c23', color: '#ffff', fontFamily: 'League Spartan' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        src={item.caminhoImg}
                                        alt={item.textAlt}
                                        sx={{ objectFit: 'scale-down' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffff', fontFamily: 'League Spartan', textDecoration: 'none' }}>
                                            {item.titlePost}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ color: '#ffff', fontFamily: 'League Spartan' }}>
                                            {item.contentPost}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Tutoriais;