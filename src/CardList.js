import React from 'react';
import Card from './Card';
import {getCards} from './getCards.js'

const CardList = ({itens, genero, nome}) => {
    let countItens = itens.length;
    let cards = getCards(genero, itens);

    return (
        <div>
            <p>Mostrando: {countItens} itens.</p>

            {cards.map(card=>(
                <Card key={card.title} card={card} />
            ))}
        </div>
    )

}

export default CardList;