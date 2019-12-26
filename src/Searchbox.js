import React from 'react';

const Searchbox = ({value, setValue}) => {
    
    const searchChange = (event) => {
        setValue(event.target.value);
    }
    
    return (
        <div>
            <input 
                type='search' 
                placeholder='digite aqui'
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;