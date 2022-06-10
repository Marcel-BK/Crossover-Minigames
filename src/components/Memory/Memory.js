import React, { useState } from 'react';
import Images from './Images';
import FlipSide from './Images/FlipSide.jpg';
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const Memory = () => {
    const [moves, setMoves] = useState(0);
    const [cards, setCards] = useState([]);

    const handleClick = (id, name) => (event) => {
        let card = event.target;

        if (moves === 0 || moves === 1) {
            if(card.getAttribute('src') === '/static/media/FlipSide.863d70120cc76e4b4d64.jpg') {
                card.setAttribute('src', name);
                const altCards = [...cards];
                altCards.push(id);
                setCards(altCards);
                console.log(cards);
            } else {
                card.setAttribute('src', '/static/media/FlipSide.863d70120cc76e4b4d64.jpg');
            }
            setMoves((moves) => moves + 1);
          } else {
            console.log('no more moves');
          }
        };

    return (
        <>
        <div className='container-fluid'>
        
        <Row className='lp-head py-3 mb-3'>
            <Link className='home-button mx-3' to={`/`}><i className='bi bi-house-door-fill'></i></Link>
            <h1 className='lp-header mx-auto'>MEMORY</h1>
        </Row>
        </div>

        <div className='memory-field'>
            <div className='memory-container'>
                {Images
                //.sort(() => Math.random() - 0.5)
                .map((element) => {
                    return (
                        <div key={element.id} className='memory-card'>
                            <img src={FlipSide} width='100%' onClick={handleClick(element.id, element.name)} />
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
}

export default Memory;