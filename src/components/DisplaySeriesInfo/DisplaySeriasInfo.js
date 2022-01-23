import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import { fetchSeriesIndex} from '../../services/SeriesApi';
import Cards from '../SeriesCard/Card/Cards';
import Footer from '../Footer/Footer'
import './DisplaySeriasInfo.css'



const DisplaySeriasInfo = () => {

        
    const [seriesInfo, setSeriasInfo] = useState([]);
   
    
    const data = [ 
        {name: "Under the Dome",rating: 6.5 }, 
        {name: "Person of Interest",rating: 8.9},
        {name: "Bitten",rating: 7.2} 
       ]; 

    
    useEffect(() => {

        async function fetchSeries() {
            const seriesArray = []
            for(let i = 1; i <= 3; i++){
                const series = await fetchSeriesIndex(i);
                seriesArray.push(series)
            }
        
            setSeriasInfo(seriesArray);
            console.log(seriesArray);

          
         }

         fetchSeries()
        
    },[])

  

    return (
        <div className='displaySeriasInfo'>
            
            <Cards series={seriesInfo} />
            <h1>Top rated Tv Series</h1>
                <div className='chart'>
                    <Chart data={data} />
                </div>  
            <Footer></Footer>
        </div>
            
    );
}


export default DisplaySeriasInfo;