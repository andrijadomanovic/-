import React, { useEffect, useState } from 'react';
import { fetchShowImages } from '../../services/SeriesApi';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css'
import SlideShowCard from './SlideShowCard/SlideShowCard';



const  Slideshow = () => {
  
  const[img, setImg]= useState([]);
  const[slide,setSlideShow] = useState([])



  const slideCard = () => {
    if(window.innerWidth <= 960 ){
        setSlideShow(4);
    }else {
        setSlideShow(10);
    }
};
window.addEventListener('resize', slideCard);

  useEffect(()=>{
    async function showImg(){
      const img = await fetchShowImages();
      setImg(img)

    }
    showImg();
    slideCard();
  },[]);

    return (
      <div className="slide-container">
        <Slide slidesToShow={slide} >
         {img.map((slideImage)=> (
             <SlideShowCard  key={slideImage.id}  showName={slideImage.name} url={slideImage.image.original}/>
          ))} 
        </Slide>
      </div>
      
    )
}

export default Slideshow;