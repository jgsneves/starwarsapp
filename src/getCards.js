export function getCards(genero, itens) {
    switch (genero) {
        case "films":
            return itens.map(item => ({
                title: item.title,
                infos: [{
                    title: "ID do filme",
                    value: item.episode_id
                },
                {
                    title: "Sinopse",
                    value: item.opening_crawl
                },
                {
                    title: "Diretor",
                    value: item.director 
                },
                {
                    title: "Produtor",
                    value: item.producer  
                },
                {
                    title: "Ano de lançamento",
                    value: item.release_date   
                },
                ]
            }))
        case "people":
            return itens.map(item => ({
                title: item.name,
                infos: [{
                    title: "Ano de nascimento",
                    value: item.birth_year 
                },
                {
                    title: "Cor dos olhos",
                    value: item.eye_color
                },
                {
                    title: "Sexo",
                    value: item.gender 
                },
                {
                    title: "Altura",
                    value: item.height 
                },
                {
                    title: "Peso",
                    value: item.mass  
                },
                {
                    title: "Naturalidade",
                    value: item.homeworld   
                },
                {
                    title: "Filmes que participa",
                    value: item.films    
                },
                {
                    title: "Espécies",
                    value: item.species     
                },
                {
                    title: "Starship",
                    value: item.starships      
                },
                {
                    title: "Veículos",
                    value: item.vehicles       
                }]
            }))
        case "planets":
            return itens.map(item => ({
                title: item.name,
                infos: [{
                    title: "Diametro",
                    value: item.diameter
                },
                {
                    title: "Período de Rotação",
                    value: item.rotation_period
                },
                {
                    title: "Período de Órbita",
                    value: item.orbital_period 
                },
                {
                    title: "Gravidade",
                    value: item.gravity  
                },
                {
                    title: "População",
                    value: item.population   
                },
                {
                    title: "Clima",
                    value: item.climate    
                },
                {
                    title: "Terreno",
                    value: item.terrain     
                },
                {
                    title: "Supercífie D'água",
                    value: item.surface_water      
                },
                {
                    title: "Residentes",
                    value: item.residents       
                }
                ]
            }))
        case "species":
            return itens.map(item => ({
                title: item.name,
                infos: [{
                    title: "Classificação",
                    value: item.classification 
                },
                {
                    title: "Designação",
                    value: item.designation 
                },
                {
                    title: "Média de altura",
                    value: item.average_height  
                },
                {
                    title: "Media de idade",
                    value: item.average_lifespan   
                },
                {
                    title: "Cor dos olhos",
                    value: item.eye_colors    
                },
                {
                    title: "Cor da pele",
                    value: item.skin_colors     
                },
                {
                    title: "Linguagem",
                    value: item.language      
                },
                {
                    title: "Planeta de origem",
                    value: item.homeworld       
                },
                {
                    title: "Pessoas",
                    value: item.people        
                }
                ]
            }))
        case "starships":
            return itens.map(item => ({
                title: item.name,
                infos: [{
                    title: "Modelo",
                    value: item.model  
                },
                {
                    title: "Classe",
                    value: item.starship_class  
                },
                {
                    title: "Marca",
                    value: item.manufacturer   
                },
                {
                    title: "Preço",
                    value: item.cost_in_credits    
                },
                {
                    title: "Largura",
                    value: item.length     
                },
                {
                    title: "Tripulação",
                    value: item.crew      
                },
                {
                    title: "Passageiros",
                    value: item.passengers       
                },
                {
                    title: "Velocidade Máxima",
                    value: item.max_atmosphering_speed        
                },
                {
                    title: "Limite de peso/transporte",
                    value: item.cargo_capacity         
                },
                {
                    title: "Quem já pilotou",
                    value: item.pilots          
                }
                ]
            }))
        case "vehicles":
            return itens.map(item => ({
                title: item.name,
                infos: [{
                    title: "Modelo",
                    value: item.model  
                },
                {
                    title: "Classe",
                    value: item.vehicle_class   
                },
                {
                    title: "Marca",
                    value: item.manufacturer   
                },
                {
                    title: "Preço",
                    value: item.cost_in_credits    
                },
                {
                    title: "Largura",
                    value: item.length     
                },
                {
                    title: "Tripulação",
                    value: item.crew      
                },
                {
                    title: "Passageiros",
                    value: item.passengers       
                },
                {
                    title: "Velocidade Máxima",
                    value: item.max_atmosphering_speed        
                },
                {
                    title: "Limite de peso/transporte",
                    value: item.cargo_capacity         
                },
                {
                    title: "Quem já pilotou",
                    value: item.pilots          
                }
                ]
            }))
        default:
            return [];
    }
}