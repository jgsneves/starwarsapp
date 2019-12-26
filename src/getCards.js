export function getCards(genero, itens) {
    switch (genero) {
        case "planets":
            return itens.map(item => ({
                title: item.name,
                infos: [{
                    title: "Diametro",
                    value: item.diameter
                },
                {
                    title: "Período de Rotação:",
                    value: item.rotation_period
                }]
            }))
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
                }
                ]
            }))
        default:
            return [];
    }
}