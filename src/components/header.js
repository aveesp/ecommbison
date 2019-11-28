import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
            <>      
                <header className="header header-transparent header-fullwidth header-style-1">
                    <div className="header-inner fixed-header">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6">
                                    <nav className="main-navigation">
                                        <ul className="mainmenu">
                                            <li className="mainmenu__item menu-item-has-children megamenu-holder">
                                                <a href="#" className="mainmenu__link">
                                                    <span className="mm-text">Home</span>
                                                </a>
                                            </li>
                                            <li className="mainmenu__item menu-item-has-children">
                                                <a href="#" className="mainmenu__link">
                                                    <span className="mm-text">Shop</span>
                                                    <span className="tip">Hot</span>
                                                </a>
                                                <ul className="megamenu four-column">
                                                    <li>
                                                        <a className="megamenu-title" href="#">
                                                            <span className="mm-text">Shop Layout</span>
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">FullWidth</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">with Sidebar</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Two columns</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Three columns</span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Shop No Gutter</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="megamenu-title" href="#">
                                                            <span className="mm-text">Single Product</span>
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Simple 01</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Simple 02</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Sticky Info</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Thumbnail Gallery</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Sidebar</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Grouped</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Affiliate</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Configurable</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="megamenu-title" href="#">
                                                            <span className="mm-text">Shop Pages</span>
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">My Account</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Shopping Cart</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Check Out</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Wishlist</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Order tracking</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">compare</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-none d-lg-block banner-holder">
                                                        <div className="megamenu-banner">
                                                            <div className="megamenu-banner-image"></div>
                                                            <div className="megamenu-banner-info">
                                                                <span>
                                                                    <a href="#">woman</a>
                                                                    <a href="#">shoes</a>
                                                                </span>
                                                                <h3>new <strong>season</strong></h3>
                                                            </div>
                                                            <a href="#" className="megamenu-banner-link"></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mainmenu__item">
                                                <a href="#" className="mainmenu__link">
                                                    <span className="mm-text">Collections</span>
                                                </a>
                                            </li>
                                            <li className="mainmenu__item menu-item-has-children has-children">
                                                <a href="#" className="mainmenu__link">
                                                    <span className="mm-text">Pages</span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">About Us</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">Our teams</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">Contact us 1</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">Contact us 2</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">404 page</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">FAQs page</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">Coming Soon</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mainmenu__item menu-item-has-children has-children">
                                                <a href="#" className="mainmenu__link">
                                                    <span className="mm-text">Blog</span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children has-children">
                                                        <a href="#">
                                                            <span className="mm-text">Blog Grid</span>
                                                        </a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Blog 02 Columns</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Blog 03 Columns</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children has-children">
                                                        <a href="#">
                                                            <span className="mm-text">Blog List</span>
                                                        </a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Blog Sidebar</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Blog Standard</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Blog No Sidebar</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">Blog Masonary</span>
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-has-children has-children">
                                                        <a href="#">
                                                            <span className="mm-text">Blog Details</span>
                                                        </a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Single Post</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="mm-text">Single Post Sidebar</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mainmenu__item">
                                                <a href="#" className="mainmenu__link">
                                                    <span className="mm-text">New Look</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 text-lg-center">
                                    <a href="#" className="logo-box">
                                        <figure className="logo--normal">
                                            <img src="assets/img/logo/logo.svg" alt="Logo"/>
                                        </figure>
                                        <figure className="logo--transparency">
                                            <img src="assets/img/logo/logo-white.png" alt="Logo"/>
                                        </figure>
                                    </a>
                                    {/* <!-- Logo End Here --> */}
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-9 col-8">
                                    <ul className="header-toolbar text-right">
                                        <li className="header-toolbar__item d-none d-lg-block">
                                            <a href="#sideNav" className="toolbar-btn">
                                                <i className="dl-icon-menu2"></i>
                                            </a>
                                        </li>
                                        <li className="header-toolbar__item user-info-menu-btn">
                                            <a href="#">
                                                <i className="fa fa-user-circle-o"></i>
                                            </a>
                                            <ul className="user-info-menu">
                                                <li>
                                                    <a href="#">My Account</a>
                                                </li>
                                                <li>
                                                    <a href="#">Shopping Cart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Check Out</a>
                                                </li>
                                                <li>
                                                    <a href="#">Wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="#">Order tracking</a>
                                                </li>
                                                <li>
                                                    <a href="#">compare</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="header-toolbar__item">
                                            <a href="#miniCart" className="mini-cart-btn toolbar-btn">
                                                <i className="dl-icon-cart4"></i>
                                                <sup className="mini-cart-count">2</sup>
                                            </a>
                                        </li>
                                        <li className="header-toolbar__item">
                                            <a href="#searchForm" className="search-btn toolbar-btn">
                                                <i className="dl-icon-search1"></i>
                                            </a>
                                        </li>
                                        <li className="header-toolbar__item d-lg-none">
                                            <a href="#" className="menu-btn"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <header className="header-mobile">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <a href="#" className="logo-box">
                                    <figure className="logo--normal">
                                        <img src="assets/img/logo/logo.svg" alt="Logo" />
                                    </figure>
                                </a>
                            </div>
                            <div className="col-8">
                                <ul className="header-toolbar text-right">
                                    <li className="header-toolbar__item user-info-menu-btn">
                                        <a href="#">
                                            <i className="fa fa-user-circle-o"></i>
                                        </a>
                                        <ul className="user-info-menu">
                                            <li>
                                                <a href="#">My Account</a>
                                            </li>
                                            <li>
                                                <a href="#">Shopping Cart</a>
                                            </li>
                                            <li>
                                                <a href="#">Check Out</a>
                                            </li>
                                            <li>
                                                <a href="#">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="#">Order tracking</a>
                                            </li>
                                            <li>
                                                <a href="#">compare</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-toolbar__item">
                                        <a href="#miniCart" className="mini-cart-btn toolbar-btn">
                                            <i className="dl-icon-cart4"></i>
                                            <sup className="mini-cart-count">2</sup>
                                        </a>
                                    </li>
                                    <li className="header-toolbar__item">
                                        <a href="#searchForm" className="search-btn toolbar-btn">
                                            <i className="dl-icon-search1"></i>
                                        </a>
                                    </li>
                                    <li className="header-toolbar__item d-lg-none">
                                        <a href="#" className="menu-btn"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- Mobile Navigation Start Here --> */}
                                <div className="mobile-navigation dl-menuwrapper" id="dl-menu">
                                    <button className="dl-trigger">Open Menu</button>
                                    <ul className="dl-menu">
                                        <li>
                                            <a href="#">
                                                Home
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 01
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                Demo 01
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 02
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 03
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 04
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 05
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 02
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                Demo 06
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 07
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 08
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 09
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 10
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 03
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                Demo 11
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="i#">
                                                                Demo 12
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 13
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 14
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 15
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 04
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                Demo 16
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 17
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 18
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 19
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Demo 20
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Shop
                                                <span className="tip">Hot</span>
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Shop Layout
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">FullWidth</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">with Sidebar</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Two columns</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Three columns</span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Shop No Gutter</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Single Product
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Simple 01</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Simple 02</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Sticky Info</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Thumbnail Gallery</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Sidebar</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Grouped</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Affiliate</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Configurable</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Shop Pages
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                My Account
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Shopping Cart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Check Out
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Order tracking
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                compare
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="d-none d-lg-block banner-holder">
                                                    <div className="megamenu-banner">
                                                        <div className="megamenu-banner-image"></div>
                                                        <div className="megamenu-banner-info">
                                                            <span>
                                                                <a href="#">woman</a>
                                                                <a href="#">shoes</a>
                                                            </span>
                                                            <h3>new <strong>season</strong></h3>
                                                        </div>
                                                        <a href="#" className="megamenu-banner-link"></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Collections
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Pages
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a href="#">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Our teams
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Contact us 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Contact us 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        404 page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        FAQs page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Coming Soon
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Blog
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a href="#">
                                                        Blog Grid
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Blog 02 Column</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Blog 02 Column</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Blog List
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Blog Sidebar</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Blog Standard</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Blog No Sidebar</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Blog Masonary
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Blog Details
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Single Post</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="mm-text">Single Post Sidebar</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                New Look
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default header
