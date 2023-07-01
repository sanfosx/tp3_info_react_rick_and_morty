
import { Link, useParams } from 'react-router-dom'
import useRickAndMortyAPI from '../../hooks/useRickAndMortyAPI'
import './Location.css'

const LocationDetails = () => {
    const { id } = useParams()

    const apiUrl = `https://rickandmortyapi.com/api/location/${id}`

    const { data, loading, error } = useRickAndMortyAPI(apiUrl, true, 3);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div key={data.id}>
               <h1>{data.name}</h1> 
                <h3>{data.type}</h3>
                <h4>{data.dimension}</h4>

            </div>
            <h2>Residentes:</h2>
            <ul>
                {data.details &&
                    data.details.map(detail => (
                        <div key={detail.id}>
                            <Link to={`../character/${detail.id}`}><img src={detail.image} alt="img character" /></Link>

                        </div>
                    ))}
            </ul>
            <p>{data.url}</p>
            <p>{data.created}</p>
        </div>
    );
}

export default LocationDetails
