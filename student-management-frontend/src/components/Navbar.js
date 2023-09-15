import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">QSA</Link>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="btn btn-primary" to="/add">Add User</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;