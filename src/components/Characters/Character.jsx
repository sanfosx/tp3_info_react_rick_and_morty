import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsRecordFill } from "react-icons/bs";
import './Character.css'

const Character = (props) => {
    const [addFav, setAddFav] = useState(false)

    const getColor = (status) => {
        if (status === 'Alive') {
          return 'green';
        } else if (status === 'Dead') {
          return 'red';
        } else {
          return 'black';
        }
      };
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
     {/*eslint-disable-next-line react/prop-types*/}
    const data = props.data
     {/*eslint-disable-next-line react/prop-types*/}
    getIdForString(data.origin.url)

    return (
        <div className="card card-character">
            {/*eslint-disable-next-line react/prop-types*/}
                <img src={data.image} alt="" className="img-character" />
            <div className="character-detail">
                <div className="card-title">
                    {/*eslint-disable-next-line react/prop-types*/}
                    <h2>{data.name}</h2>
                    <p onClick={() => setAddFav(!addFav)} className="iconfav">
                        {addFav ? <AiFillHeart /> : <AiOutlineHeart />}
                    </p>
                </div>
                <div className="character-alive">
               {/*eslint-disable-next-line react/prop-types*/}
                {<BsRecordFill style={{color: getColor(data.status)}}/>}
                 {/*eslint-disable-next-line react/prop-types*/}
                <p> {data.status} - {data.species}.  {data.type}</p>
                </div>
                <p>Origin:</p>
                 {/*eslint-disable-next-line react/prop-types*/}
                <Link to={`../location/${getIdForString(data.origin.url)}`} className="custom-link"> <p className="character-p">{data.origin.name}</p></Link>
                <p> Last know location:</p>
                 {/*eslint-disable-next-line react/prop-types*/}
                <Link to={`../location/${getIdForString(data.location.url)}`} className="custom-link" ><p className="character-p">{data.location.name}</p></Link>

                 {/*eslint-disable-next-line react/prop-types*/}
                <Link to={`/character/${data.id}`}><p>Mas detalles</p> </Link>
            </div>
        </div>
    )
}
export default Character
