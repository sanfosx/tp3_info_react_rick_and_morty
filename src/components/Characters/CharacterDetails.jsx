
import { Link, useParams } from 'react-router-dom'
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI'
import { BsCircle } from "react-icons/bs";
import Loading from '../Loading/Loading';
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
        return <Loading/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="main-container">
            <div className="character-details-container">
                <div className="character-detail-content">
                    <div className="character-data-content">
                        <img src={data.image} alt="Img character" />
                        <div className="character-detail-data">
                            <h1>{data.name}</h1>
                            <div className="character-alive"> 
                            {<BsCircle />} <h2> {data.status} - {data.species}.  {data.type}</h2>
                            </div>  
                            <h4>Origin:</h4>
                            
                            <Link to={`../location/${getIdForString(data.origin.url)}`} className="custom-link"><h2 >{data.origin.name}</h2></Link>
                            <h4> Last know location:</h4>
                            <Link to={`../location/${getIdForString(data.location.url)}`} className="custom-link"><h2>{data.location.name}</h2></Link>
                        </div>
                    </div>
                    <h2>Episodios:</h2>
                    <div className="episode-detail-container">
                        {data.details &&
                            data.details.map(detail => (
                                <div key={detail.id}>
                                    <Link to={`../episode/${detail.id}`} className="custom-link">
                                        <div className="episode-card-detail">
                                            <h5>{detail.episode} </h5>
                                            <h4>{detail.name}</h4>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                    <p>{data.url}</p>
                    <p>{data.created}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetails
