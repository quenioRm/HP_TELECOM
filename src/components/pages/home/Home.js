import React from "react";
import Footer from "../layout/Footer";

const Home = () => {

    return(
        <div id="page-content" className="page-content header-clear bg bg-cover bg-transparent">
            <div id="page-content-scroll">
                <div className="landing-homepage">
                    <div className="landing-page landing-dark">
                        <div className="landing-wrapper">
                        <div className="landing-header no-bottom">
                            <a className="header-icon_3" href="#"></a>
                            <div className="landing-header-icons">
                                <a className="bg-green-dark show-share-bottom" href="#"><i className="fa fa-share-alt"></i></a>
                                <a className="twitter-bg" href="#"><i className="fa fa-twitter"></i></a>
                                <a className="facebook-bg" href="#"><i className="fa fa-facebook"></i></a>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="content no-material no-bottom">
                            <div className="deco"></div>
                        </div>
                        {/* <!-- Left Top Menu --> */}
                        <ul>
                            <li>
                                <a href="index.html">
                                <i className="fa fa-home bg-red-dark"></i>
                                <em>Home</em>
                                </a>
                            </li>
                            <li>
                                <a href="features-typography.html">
                                <i className="fa fa-cog bg-green-dark"></i>
                                <em>Features</em>
                                </a>
                            </li>
                            <li>
                                <a href="gallery-square.html">
                                <i className="fa fa-camera bg-blue-dark"></i>
                                <em>Galleries</em>
                                </a>
                            </li>
                            <li>
                                <a href="portfolio-one.html">
                                <i className="fa fa-image bg-magenta-dark"></i>
                                <em>Portfolios</em>
                                </a>
                            </li>
                            <li>
                                <a href="pageapp-coverpage.html">
                                <i className="fa fa-mobile bg-orange-dark"></i>
                                <em>App Specific</em>
                                </a>
                            </li>
                            <li>
                                <a href="page-soon.html">
                                <i className="fa fa-file-o bg-teal-dark"></i>
                                <em>Pages</em>
                                </a>
                            </li>
                            <li>
                                <a href="page-blog.html">
                                <i className="fa fa-pencil bg-night-dark"></i>
                                <em>Blog</em>
                                </a>
                            </li>
                            <li>
                                <a className="tel:+1 234 567 890" href="#">
                                <i className="fa fa-phone bg-red-light "></i>
                                <em>Call Us</em>
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                <i className="fa fa-envelope-o bg-blue-dark"></i>
                                <em>Contact</em>
                                </a>
                            </li>
                        </ul>
                        <div className="clear"></div>
                        <div className="content no-material no-bottom">
                            <div className="deco"></div>
                        </div>
                        <Footer/>
                        </div>
                        <div className="landing-overlay"></div>
                        <div className="background"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;