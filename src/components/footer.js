import React from 'react'

export default function footer() {
    return (
        <>
        <footer className="footer footer-1 bg--black ptb--40">
            <div className="footer-top pb--40 pb-md--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-8 mb-md--30">
                            <div className="footer-widget">
                                <div className="textwidget">
                                    <img src="assets/img/logo/logo-white.png" alt="Logo" className="mb--10" />
                                    <p className="font-size-16 font-2 mb--20">Integer ut ligula quis lectus fringilla elementum porttitor sed est. Duis fringilla efficitur ligula sed lobortis.</p>
                                    <ul className="social">
                                        <li className="social__item">
                                            <a href="twitter.com" className="social__link color--white">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="social__item">
                                            <a href="plus.google.com" className="social__link color--white">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="social__item">
                                            <a href="facebook.com" className="social__link color--white">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="social__item">
                                            <a href="youtube.com" className="social__link color--white">
                                                <i className="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="social__item">
                                            <a href="instagram.com" className="social__link color--white">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-md--30">
                            <div className="footer-widget">
                                <h3 className="widget-title">Company</h3>
                                <ul className="widget-menu">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="">Our Services</a></li>
                                    <li><a href="">Affiliate Program</a></li>
                                    <li><a href="">Work for Bison</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-sm--30">
                            <div className="footer-widget">
                                <h3 className="widget-title">USEFUL LINKS</h3>
                                <ul className="widget-menu">
                                    <li><a href="shop-collections.html">The Collections</a></li>
                                    <li><a href="">Size Guide</a></li>
                                    <li><a href="">Return Policiy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-sm--30">
                            <div className="footer-widget">
                                <h3 className="widget-title">SHOPPING</h3>
                                <ul className="widget-menu">
                                    <li><a href="shop-instagram.html">Look Book</a></li>
                                    <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                    <li><a href="shop-fullwidth.html">Shop Fullwidth</a></li>
                                    <li><a href="shop-no-gutter.html">Man &mp; Woman</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">CONTACT INFO</h4>
                                <ul className="contact-info">
                                    <li className="contact-info__item">
                                        <i className="fa fa-phone"></i>
                                        <span><a href="" className="contact-info__link">(+612) 2531 5600</a></span>
                                    </li>
                                    <li className="contact-info__item">
                                        <i className="fa fa-envelope"></i>
                                        <span><a href="" className="contact-info__link">info@la-studioweb.com</a></span>
                                    </li>
                                    <li className="contact-info__item">
                                        <i className="fa fa-map-marker"></i>
                                        <span>114 W 26th St.Floor 2 New York, 10001 NY</span>
                                    </li>
                                </ul>
                                <div className="textwidget">
                                    <img src="assets/img/others/payments.png" alt="Payment" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle pb--40 pb-md--30">
                <div className="container">
                    <div className="row method-box-wrapper">
                        <div className="col-lg-3 col-md-6 mb-md--10">
                            <div className="method-box">
                                <h4>FREESHIPPING WORLD WIDE</h4>
                                <p>Freeship over oder $100</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-md--10">
                            <div className="method-box">
                                <h4>30 DAYS MONEY BACK</h4>
                                <p>You can back money any times</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm--10">
                            <div className="method-box">
                                <h4>PROFESSIONAL SUPPORT 24/7</h4>
                                <p>info@la-studioweb.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="method-box">
                                <h4>100% SECURE CHECKOUT</h4>
                                <p>Protect buyer &mp; clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="copyright-text">&copy;2019 BISON. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
