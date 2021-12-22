import React from "react";  

const Footer = () => {
    return(
        <div className="landing-footer">
            {/* <p className="center-text">Copyright 2015. All rights reserved.</p> */}
            <div className="landing-footer-icons">
                <a href="#" className="scale-hover facebook-bg social-ball"><i className="fa fa-facebook"></i></a>
                <a href="#" className="scale-hover twitter-bg social-ball"><i className="fa fa-twitter"></i></a>
                <a href="#" className="scale-hover google-bg social-ball"><i className="fa fa-google-plus"></i></a>
                <a href="#" className="scale-hover back-to-top bg-green-dark social-ball"><i className="fa fa-phone"></i></a>
                <a href="#" className="scale-hover show-share-bottom bg-magenta-dark social-ball"><i className="fa fa-envelope-o"></i></a>
            </div>
        </div>
    )
}

export default Footer;