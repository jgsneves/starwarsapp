import React from 'react';
import './App.css';
import 'tachyons';
import Menu from "./Menu";
import Searchbox from './Searchbox';
import CardList from "./CardList";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            searchfield: '',
            elementos: [],
            select: 'films'
        }
    }

    componentDidMount = () => {
        fetch(`https://swapi.co/api/${this.state.select}/?search=${this.state.searchfield}`).then(response => {
            return response.json();
        }).then(response => {
            this.setState({elementos: response.results});
        })
    }

    render() {
        return (
            <div>
                <h1>Star <br></br> wars <br></br>APP</h1>
                <main>
                    <p>
                        Bem vindo ao Starwars WEB-APP, aqui você pode pesquisar sobre personagens,
                        planetas, naves, filmes ou espécies que pertencem ao contexto Starwars!
                        <br></br>
                        <br></br>
                    </p>
                    <Menu value={this.state.select} setValue={(value) => {
                        this.setState({select: value});
                         
                    }}/>

                    <p>
                        Digite o nome:
                    </p>
                    <Searchbox value={this.state.searchfield} setValue={(value) => {
                        this.setState({searchfield: value});
                        this.componentDidMount();
                        console.log(this.state.elementos)
                    }}/>
                    <br>
                    </br>
                    <CardList 
                        genero={this.state.select} 
                        itens={this.state.elementos}
                        nome={this.state.searchfield}/>
                </main>
            </div>
        )
    }
}

export default App;
