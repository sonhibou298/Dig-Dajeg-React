import React from 'react';

const Menu = () => {

    return (
        <section className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                    </button>


                    <a href="#" className="navbar-brand"><i className="fa fa-h-square"></i>ealth Center</a>
                </div>


                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href='#'>Acceuil</a></li>
                        {/*<li><a href="#" className="smoothScroll">A Propos</a></li>*/}
                        {/*<li><a href="#" className="smoothScroll">Docteurs</a></li>*/}
                        {/*<li><a href="#" className="smoothScroll">Info</a></li>*/}
                        {/*<li><a href="#" className="smoothScroll">Contact</a></li>*/}
                        {/*<a href="#">Menu</a>*/}
                        {/*<li className="appointment-btn"><a href="#">S'Authentifier</a></li>*/}
                    </ul>
                </div>

            </div>
        </section>
    )
}
export default Menu;