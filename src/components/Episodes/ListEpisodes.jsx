import { useState } from 'react'
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI'
import './Episode.css'
import Episode from './Episode'
const ListEpisodes = () => {
    const [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/api/episode?page=1')

    const { data, loading, error } = useRickAndMortyAPI(apiUrl);

    const [pages, setPages] = useState(1)

    const prevPage = () => {
        if (pages > 1) {
            setPages(pages - 1)
            setApiUrl(data.info.prev)
        }
    }

    const nextPage = () => {
        if (pages < data.info.pages) {
            setPages(pages + 1)
            setApiUrl(data.info.next)
        }
    }

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="main-container">
            <div className="list-episodes">
                {data && data.results.map(episode => (
                    <Episode key={episode.id} data={episode}></Episode>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => prevPage()}>Prev</button>
                <p>{`Pagina ${pages} de ${data.info.pages}`}</p>
                <button onClick={() => nextPage()}>Next</button>
            </div>
        </div>
    );
}

export default ListEpisodes
