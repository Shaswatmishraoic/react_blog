import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Compo.css';

function LinkCompo({ isVisible }) {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const hideNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <section className='stickit' style={{ display: isVisible ? 'block' : '' }}>
        <header>
          <button className='nav-btn' onClick={toggleNavbar}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav
            ref={navRef}
            className={`navbar ${isNavOpen ?'' : 'responsive_nav' }`}
            onClick={hideNavbar}
          >
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/bollywood" activeClassName="active">Bollywood</NavLink>
            <NavLink to="/technology" activeClassName="active">Technology</NavLink>
            <NavLink to="/hollywood" activeClassName="active">Hollywood</NavLink>
            <NavLink to="/fitness" activeClassName="active">Fitness</NavLink>
            <NavLink to="/food" activeClassName="active">Food</NavLink>
          </nav>
        </header>
      </section>
      <hr className='hrline' />
    </>
  );
}

export default LinkCompo;