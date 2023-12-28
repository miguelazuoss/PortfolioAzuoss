import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ThemeContext from '../../context/ThemeContext';
function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <nav className="navbar-nav">
            <ul className="navbar-list">
                <li className="navbar-item2">
                    <button
                        onClick={() => {
                            toggleTheme(theme === 'light' ? 'dark' : 'light');
                            document.body.classList.toggle('dark-theme');
                        }}
                        className={`theme-toggle-button ${theme}`}
                    >
                    </button>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/contact">Contact</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;