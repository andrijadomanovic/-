import React from 'react';

const SlideShowCard = (props) => {
  return (
        
    // <div className="each-slide" key={slideImage.id}>
    <div className='img-slide' >
      <img className='image' alt={props.showName} src={props.url}></img>
    </div>
//   </div>
    );
}

export default SlideShowCard;
