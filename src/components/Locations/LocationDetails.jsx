
import { Link, useParams } from 'react-router-dom'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI'
import './Location.css'

const LocationDetails = () => {
    const { id } = useParams()

    const apiUrl = `https://rickandmortyapi.com/api/location/${id}`

    const { data, loading, error } = useRickAndMortyAPI(apiUrl, true, 3);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error error={error}/>;
    }

    return (
        <div className="main-container">
            <div className="character-detail-container">
                    <h2>{data.type}</h2>
                    <h1>{data.name}</h1>
                    <h4>{data.dimension}</h4>
                
                <h2>Residentes:</h2>
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

export default LocationDetails
