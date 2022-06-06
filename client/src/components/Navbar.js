import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Wrapper from '../assets/wrappers/Navbar'
import { useAppContext } from '../context/appContext'

function Navbar() {
  const { user, logoutUser } = useAppContext()
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Wrapper>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>

          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1
            style={{
              textAlign: 'centre',
              color: "white"
            }}
          >
            My Tax Guider
          </h1>
          <button type='button' className='logout-btn' onClick={logoutUser}>
            <FaIcons.FaUserCircle className='logout-ico' />
            logout
          </button>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (

                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {/* <SubMenu item={item} key={index} /> */}
                    <span>{item.title}</span>
                    {/* {item.subNav} */}
                  </Link>
                </li>
              );
            })}
            {
              user.userType === 'Admin' && <li className='nav-text'>
                <Link to='/admin/create'>
                  <IoIosCreate />
                  <span>Register Admin/ Employee</span>
                </Link>
              </li>
            }
          </ul>
        </nav>
      </IconContext.Provider>
    </Wrapper>
  );
}

export default Navbar;