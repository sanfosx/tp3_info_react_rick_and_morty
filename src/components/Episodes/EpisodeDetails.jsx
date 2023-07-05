import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI'
import './Episode.css'

const EpisodeDetails = () => {
    const { id } = useParams()
    const apiUrl = `https://rickandmortyapi.com/api/episode/${id}`
    const { data, loading, error } = useRickAndMortyAPI(apiUrl, true, 2);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="main-container">
            <div className="character-detail-container">
                <h2>{data.episode}</h2>
                <h1> {data.name}</h1>
                <p>{data.air_date}</p>
                <h2>Personajes:</h2>
                <div className="list-character-detail-img">
                    {data.details &&
                        data.details.map(detail => (
                            <div key={detail.id}>
                                <Link to={`../character/${detail.id}`}>
                                    <img src={detail.image} alt="img character" className="character-detail-img" />
                                </Link>
                            </div>
                        ))}
                </div>
                <p>{data.url}</p>
                <p>{data.created}</p>
            </div>
        </div>
    );
}

export default EpisodeDetails
