import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '/images/logo.png'
const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const showMenu = ()=>{
    setIsActive(!isActive);
  }

  return (
    <div className='header'>
      <div className='container-fluid d-flex align-items-center'>
        <a className='logo' href='#' >
          <img src= {logo} width='100' />
        </a>
        <ul
          className={`nav-main d-flex ${isActive ? 'show-nav' : ''}`}
        >
          <li>
            <a href='#'>Home </a>
          </li>
          <li>
            <a href='#'>Home </a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>mega menu</a>
          </li>
        </ul>
        <FontAwesomeIcon onClick={showMenu} icon={isActive? 'times':'bars'} type='button' className='d-md-none' />


      </div>
    </div>
  );
};

export default Header;
