import React from 'react';
import Tilt from 'react-parallax-tilt'
import Img from '../../assets/images/telenor.jpg'
import './Logo.css'

const Logo = () =>{
 return(
     <div>
        <Tilt className="tilt" options={{ max : 25}} style={{ height: 60, width: 180, 'borderRadius':'40px' }} >
            <div className="Tilt-inner"> <img src={Img} alt='logo' style={{height:60, width:60, 'borderRadius':' 40px'}}></img></div>
        </Tilt>
     </div>
 );
}

export default Logo;