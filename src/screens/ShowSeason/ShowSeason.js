import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchShowSeason} from '../../services/SeriesApi';
import SeasonCard from '../../components/SeriesCard/Card-components/Show-season/SeasonCard';

import './ShowSeason.css'

const ShowSeason = () => {

    const location = useLocation();
    // showIndex je vrednost koju sam prosledio u <Link/> kao state.
    const {showIndex} = location.state

    const [showSeasons,setShowSeasons] = useState([])
  

    useEffect(()=>{
        async function fetchSeason(){
            const seasons = await fetchShowSeason(showIndex);
                setShowSeasons(seasons);
            
                
            }
            fetchSeason();
            
        },[]);
        
        console.log('showLocation',showIndex)
        console.log('aaa',showSeasons); 
  return (
  
        <div className='seasonSeries'>
            
            {showSeasons && showSeasons.map((season) => (
                <SeasonCard key={season.id} image={season.image} number={season.number}/>
            ))}
        </div>
    );
}

export default ShowSeason;
