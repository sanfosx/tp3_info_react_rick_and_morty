import { useState } from 'react'
import Character from './Character';
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI';
import './Character.css'

const ListCharacters = () => {
    const [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/api/character?page=1')

    const { data, loading, error } = useRickAndMortyAPI(apiUrl);
    const [pages, setPages] = useState(1)
   
    const prevPage = ()=>{
        if(pages > 1){
            setPages(pages-1)
            setApiUrl(data.info.prev)
        } 
    }

    const nextPage = ()=>{
        if(pages < data.info.pages){
            setPages(pages+1)
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
        <>
        <div className="list-characters">
            {data && data.results.map(character => (
                 <Character key={character.id} data={character}></Character>
                
            ))}
            </div>
            <div className="pagination">
            <button onClick={() => prevPage() }>Prev</button>
            <p>{`Pagina ${pages} de ${data.info.pages}`}</p>
            <button onClick={() =>  nextPage() }>Next</button>
            </div>
        
        </>
    );
}

export default ListCharacters



