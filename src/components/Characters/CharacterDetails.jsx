
import { Link, useParams } from 'react-router-dom'
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI'
import { BsCircle } from "react-icons/bs";
import './Character.css'
const CharacterDetails = () => {
    const { id } = useParams()
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`
    const { data, loading, error } = useRickAndMortyAPI(apiUrl, true, 1);

    //Esta funcion lee un string y acumula los ultimos caracteres hasta que encuentr "/" se usa para obtener la url del dato 
    function getIdForString(str) {
        const caracteres = [];
        for (let i = str.length - 1; i >= 0; i--) {
            const caracterActual = str[i];

            if (caracterActual === "/") {
                break;
            }
            caracteres.unshift(caracterActual);
        }
        return caracteres.join("");
    }

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="character-details-container">
            <div className="character-detail-hero">
                <img src={data.image} alt="Img character" />
                <div className="character-detail-content">
                    <h1>{data.name}</h1>
                    <p className="character-alive"> {<BsCircle />}{data.status} - {data.species}.  {data.type}</p>
                    <p>Origin:</p>
                    <Link to={`../location/${getIdForString(data.origin.url)}`}><p className="character-p">{data.origin.name}</p></Link>
                    <p> Last know location:</p>
                    <Link to={`../location/${getIdForString(data.location.url)}`}><p className="character-p">{data.location.name}</p></Link>
                </div>
            </div>
            <h2>Episodios:</h2>
            <ul>
                {data.details &&
                    data.details.map(detail => (
                        <div key={detail.id}>
                            <Link to={`../episode/${detail.id}`}> {detail.episode} - {detail.name} </Link>
                        </div>
                    ))}
            </ul>
            <p>{data.url}</p>
            <p>{data.created}</p>
        </div>
    );
}

export default CharacterDetails
