import React from 'react';

const Card = ({card}) => {
    return (
        <div className='div2'>
            <h2>{card.title}</h2>
            {card.infos.map(info => (
                <div key={info.title}>
                    <div className='titulo'>
                        {info.title}:
                    </div>
                    <div className='texto'>
                        {info.value} 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;