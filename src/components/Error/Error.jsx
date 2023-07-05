
import './Error.css'
import GobackButton from '../GoBackButton/GobackButton'
const Error = (error) => {
    return (
        <div className="error-container">
            <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="" />
            <h1>UPS!!! Se ha producido un Error</h1>
            <p>{error}</p>
            <GobackButton/>

        </div>
    )
}

export default Error
