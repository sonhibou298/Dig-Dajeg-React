import React from 'react';
import "../navbootstrap.css";

const NavBootstrap = () => {

    return (
        <section className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>


                    <a href="index.html" className="navbar-brand">ealth Center</a>
                </div>


                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Acceuil</a></li>
                        <li><a href="#">A Propos</a></li>
                        <li><a href="#">Docteurs</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className="appointment-btn"><a href="#">S'Authentifier</a></li>
                    </ul>
                </div>

            </div>
        </section>

    )
}
export default NavBootstrap;