import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import '../Navigation/Nav.css'
import Logo from '../Logo/Logo';


const Navigation = () => {
    const [click,setClick]= useState(false);
    const [button,setButton] = useState(true)
   
   
    const handleClick = () => setClick(!click);
    const closeHamburgerMenu = () => setClick(false);
  
    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

return (
    <nav className='navbar'>
        <div className='navbar-container'>
            
        <Link 
        to='/' 
        className='navbar-logo'>
                <Logo className='logo'/>
        </Link>
                    
    <div className='menu-icon' onClick={handleClick} >
        <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
    </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link 
                to='/' 
                className='nav-links' 
                onClick={closeHamburgerMenu} >Home</Link>
            </li>
            <li className='nav-item'>
                <Link 
                to='/series' 
                className='nav-links' 
                onClick={closeHamburgerMenu} >Series</Link>
            </li>
            <li className='nav-item'>
                <Link 
                to='/movies' 
                className='nav-links' 
                onClick={closeHamburgerMenu} >Movies</Link>
            </li>
            <li className='nav-item'>
                <Link 
                to='/sign-up' 
                className='nav-links-mobile' 
                onClick={closeHamburgerMenu} >Sign Up</Link>
            </li>
            <li className='nav-item'>
                <Link 
                to='/register' 
                className='nav-links-mobile' 
                onClick={closeHamburgerMenu} >Register</Link>
            </li>
        </ul> 
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            {/* {button && <Button buttonStyle='btn--outline'>REGISTER</Button>} */}
        </div>
</nav>
    );
}

export default Navigation;
