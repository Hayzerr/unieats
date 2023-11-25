import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">SDU-Januya</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Меню <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Места</a>
                    <a className="nav-item nav-link" href="#">Акции</a>
                </div>
            </div>
            <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link" href="#">Корзина <span className="badge badge-light">0</span></a>
                <a className="nav-item nav-link" href="#">Профиль</a>
            </div>
        </nav>
    );
};

export default Navbar;
