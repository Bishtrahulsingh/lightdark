import React from 'react'
import { Link } from 'react-router-dom';
import style from "../css/card.module.css"

const Card = ({entry}) => {
    const {id,body,title,userid} = entry;
  return (
    <Link to={`/post?postid=${id}`} style={{textDecoration:"none",color:'black'}} >
        <div className={style.card}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </Link>
  )
}

export default Card