import React from 'react';
import './ShowCard.css';
import { Link } from 'react-router-dom';
const ShowCard = (props) => {
  return (
    <div className='series-Item'>
        <h2>{props.name}</h2>
            <Link 
             to='/series-seson'> 
             {!!props.image && <img alt='' src={props.image.medium }></img>}
            </Link>
    {props.summary}
</div> 
    );
}

export default ShowCard;
