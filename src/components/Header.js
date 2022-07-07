import React from 'react';



const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-5">
                        <p>Bienvenue sur la plateforme Health center</p>
                    </div>

                    <div className="col-md-8 col-sm-7 text-align-right">
                        <span className="phone-icon"><i className="fa fa-phone"></i> 33 855 64 28</span>
                        <span className="date-icon"><i
                            className="fa fa-calendar-plus-o"></i> 08:00 - 22:00 (Lun-Sam)</span>
                        <span className="email-icon"><i className="fa fa-envelope-o"></i> <a
                            href="#">info@chifaa.com</a></span>
                    </div>

                </div>
            </div>
        </header>

    )
}

export default Header;