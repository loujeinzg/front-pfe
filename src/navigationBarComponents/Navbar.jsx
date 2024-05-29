import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#0d6efd' }}>
        <Link to="#" className="menu-icon" onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
            <li className="nav-text">
              <Link to="#" onClick={openModal} className="nav-link">
                <FaIcons.FaVideo />
                <span>Meetings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      {showModal && (
         <div className="modal">
         <div className="modal-content">
           <span className="close" onClick={closeModal}>
             &times;
           </span>
           <h2>Select Meeting Platform</h2>
           <div className="modal-buttons">
             <button onClick={() => handleRedirect('zoommtg://zoom.us/start')} className="modal-button zoom">
               Zoom
             </button>
             <button onClick={() => handleRedirect('msteams://teams.microsoft.com')} className="modal-button teams">
               Teams
             </button>
           </div>
         </div>
       </div>
      )}
    </>
  );
}

export default Navbar;
