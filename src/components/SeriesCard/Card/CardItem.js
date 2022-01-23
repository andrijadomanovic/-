import React from 'react';
import './Cards.css'
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <div className='card'>
        
        <Link to='/series/seasons' state={{showIndex: props.showIndex}}>
                <img className='image' src={props.imgUrl} />
        </Link>
        <h1 className='title'>{props.title}</h1>
       
        <p><strong>Genre: </strong>{props.genres}</p>
        <div  className='paragraph' dangerouslySetInnerHTML={{__html: props.summary}} />
        
    </div>
  );
}

export default CardItem;