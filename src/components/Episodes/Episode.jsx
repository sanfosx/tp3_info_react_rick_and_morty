import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './Episode.css'
const Episode = (props) => {
    const [addFav, setAddFav] = useState()

    return (
        <div className="card card-episodios">
           
            <div className="card-episodios-tittle">
                {/*eslint-disable-next-line react/prop-types*/}
                <h3>{props.data.episode}</h3>
                <a onClick={() => setAddFav(!addFav)}>
                    {addFav ? (<AiFillHeart />) : (<AiOutlineHeart />)}
                </a>
            </div>
            {/*eslint-disable-next-line react/prop-types*/}
            <h2>{props.data.name}</h2>
            {/*eslint-disable-next-line react/prop-types*/}
            <h5>{props.data.air_date}</h5>
            <Link to={`../episode/${props.data.id}`}><p>Ver mas</p> </Link>
        </div>
    )
}

export default Episode
