import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar navbar-container">
            <div className= "logo-content">
                
                <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="" className="logo-img" />
            
                <Link to='./'>Rick & Morty</Link>
            </div>
           
                <ul className="content-links">
                    <li><Link to="./characters">Personajes</Link></li>
                    <li><Link to='./episodes'>Episodios</Link></li>
                    <li><Link to='./locations'>Ubicaciones</Link></li>
                </ul>
            
        </div>
    )
}

export default Navbar