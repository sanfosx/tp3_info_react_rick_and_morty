import { useState } from 'react'
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI'
import Location from './Location'
import './Location.css'

const ListLocation = () => {
    const [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/api/location?page=1')

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
            <div className="list-locations">
                {data && data.results.map(location => (
                    <Location key={location.id} data={location}></Location>
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

export default ListLocation
