import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Navbar({ title = 'Default Title', home = 'Home', About = 'About' }) {
    // State to track selected background color
    const [bgColor, setBgColor] = useState('white');

    // Function to set background color for the page
    const setCustomColor = (color) => {
        setBgColor(color);
        document.body.style.backgroundColor = color;
        document.body.style.color = color === 'white' ? 'black' : 'white'; // Adjust text color for readability
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Fixed dark navbar */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">{About}</a>
                            </li>
                        </ul>
                        <div className="container d-flex align-items-center">
                            <label className="form-check-label text-white me-2">
                                Custom Color
                            </label>
                            <div className="btn-group" role="group" aria-label="Color selection">
                                <button type="button" className="btn btn-secondary" onClick={() => setCustomColor('black')}>Black</button>
                                <button type="button" className="btn btn-primary" onClick={() => setCustomColor('blue')}>Blue</button>
                                <button type="button" className="btn btn-purple" onClick={() => setCustomColor('purple')}>Purple</button>
                                <button type="button" className="btn btn-success" onClick={() => setCustomColor('darkgreen')}>Dark Green</button>
                                <button type="button" className="btn btn-light" onClick={() => setCustomColor('white')}>White</button>
                            </div>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    About: PropTypes.string
};

export default Navbar;
