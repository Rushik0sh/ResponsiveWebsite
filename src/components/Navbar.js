import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleclick =()=>{setClick(!click)};
  const closemobilemenu =()=>{setClick(false)};

  const showButton =()=>{
    if(window.innerWidth <=960){
      setButton(false);
    }else{
      setButton(true);
    }
  };
  window.addEventListener('resize',showButton);

  useEffect(() => {
    showButton();
  }, [])
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className='navbar-logo' onClick={closemobilemenu}>
          TRVL <i className="fab fa-typo3"/>
        </Link>
        <div className="menu-icon" onClick={handleclick}>
          <i className={click ? 'fas fa-times':'fas fa-bars'}/>
        </div>
        <ul className={click ?'nav-menu active':'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closemobilemenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closemobilemenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closemobilemenu}>
              Products
            </Link> 
          </li>
          {/* <li className='nav-item'>
            <Link to='/sign-up' className='nav-links' onClick={closemobilemenu}>
              Sign Up
            </Link>
          </li> */}
        </ul>
        {button && <Button buttonStyle='btn--outline'
        >SIGN UP </Button>}
      </div> 
    </nav>
  )
}

export default Navbar