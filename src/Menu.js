import React from 'react';

const Menu = ({value, setValue}) => {
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <form>
            <label>
                Sobre o que deseja saber mais? <br>
                </br><br>
                </br>
                <select value={value} onChange={handleChange}>
                    <option value="films">Filmes</option>
                    <option value="people">Personagens</option>
                    <option value="planets">Planetas</option>
                    <option value="species">Espécies</option>
                    <option value="starships">Naves</option>
                    <option value="vehicles">Veículos</option>
                </select>
            </label>
        </form>
    )

}

export default Menu;