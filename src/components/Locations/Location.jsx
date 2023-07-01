import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './Location.css'

const Location = (props) => {
    const [addFav, setAddFav] = useState(false)

    return (
        <div className="card-ubicaciones" onClick={ ()=> <Link to={`../location/${props.data.id}`}></Link>}>
            <div className="card-ubicaciones-tittle">
                {/*eslint-disable-next-line react/prop-types*/}
                <h3>{props.data.type}</h3>
                <a onClick={() => setAddFav(!addFav)}>
                    {addFav ? (<AiFillHeart />) : (<AiOutlineHeart />)}
                </a>
            </div>
            {/*eslint-disable-next-line react/prop-types*/}
            <h2>{props.data.name}</h2>
            {/*eslint-disable-next-line react/prop-types*/}
            <h5>{props.data.dimension}</h5>
            <Link to={`../location/${props.data.id}`}><p>Ver mas</p> </Link>
            
        </div>
    )
}

export default Location
