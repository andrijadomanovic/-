import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



const Cards = (props) => {

  console.log('pisica props',props)
    
  return (
    <div className='cards'>
        {props.series.map((show) =>(
          <CardItem 
          key={show.id} 
          title={show.name} 
          imgUrl={show.image.original} 
          summary={show.summary} 
          showIndex={show.id} 
          genres={show.genres}
         
          />
        ))}
        
    </div>
  );
}

export default Cards;