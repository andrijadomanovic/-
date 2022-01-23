import React from 'react';
import './SeasonCard.css';

const SeasonCard = (props) => {
    let title = "Season " + props.number
  return (
        <div className='season-card'>
            <h2>{title}</h2>
            <img className='image' src={props.image.medium}/>
        </div>
        );
}

export default SeasonCard;
