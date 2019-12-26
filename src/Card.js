import React from 'react';

const Card = ({card}) => {
    return (
        <div className='div2'>
            <p>{card.title}</p>
            {card.infos.map(info => (
                <div key={info.title}>
                    {info.title} - {info.value}
                </div>
            ))}
        </div>
    )
}

export default Card;