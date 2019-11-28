import React,{Component} from 'react'
import { Button, Modal} from 'react-bootstrap';
import Slider from "./slider"


export class trending extends Component {
    state = {
        show: false,
        images: [
            "assets/img/products/prod-9-1.jpg",
            "assets/img/products/prod-10-1.jpg",
            "assets/img/products/banner-in-menu.jpg",
            "assets/img/products/m01-collection3.jpg",
            "assets/img/products/m01-img1.jpg",
            "assets/img/products/m02-banner2.jpg",
            "assets/img/products/m02-banner1.jpg"
        ]
    };

    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    render() {
        return (
            <>
                <section className="trending-products-area pt--30 pb--80 pt-md--20 pb-md--60">
                    <div className="container-fluid">
                        <div className="row mb--40 mb-md--30">
                            <div className="col-12">
                                <h2 className="heading-secondary text-center">Trending</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-20-1.jpg" alt="" className="primary-image" />
                                                    <img src="assets/img/products/prod-20-2.jpg" alt="" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}>
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Limited edition v-neck t-shirt</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-19-4.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-19-1.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}>
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <span className="product-badge new">New</span>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Hig-Rise Skinny Jean</a>
                                            </h3>
                                            <div className="product-rating">
                                                <span>
                                                    <i className="dl-icon-star rated"></i>
                                                    <i className="dl-icon-star rated"></i>
                                                    <i className="dl-icon-star rated"></i>
                                                    <i className="dl-icon-star"></i>
                                                    <i className="dl-icon-star"></i>
                                                </span>
                                            </div>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-18-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-18-4.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}>
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <span className="product-badge sale">Sale</span>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Waxed-effect pleated skirt</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-17-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-17-4.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <span className="product-badge hot">hot</span>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Chain print bermuda shorts</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-16-4.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-16-1.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Check blazer</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-15-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-15-3.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Linen-Blend Pinstriped Culottes</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                            <div className="product-color-swatch">
                                                <a className="product-color-swatch-btn blue">
                                                    <span className="product-color-swatch-label"></span>
                                                </a>
                                                <a className="product-color-swatch-btn green">
                                                    <span className="product-color-swatch-label"></span>
                                                </a>
                                                <a className="product-color-swatch-btn pink">
                                                    <span className="product-color-swatch-label"></span>
                                                </a>
                                                <a className="product-color-swatch-btn red">
                                                    <span className="product-color-swatch-label"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-14-2.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-14-1.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Super skinny blazer</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-13-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-13-2.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Super skinny trousers</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-12-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-12-4.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Open sweatshirt</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-11-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-11-2.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Dress with belt</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-10-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-10-3.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Grey blue leather backpack</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
                                <div className="airi-product">
                                    <div className="product-inner">
                                        <figure className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-9-1.jpg" alt="Product Image" className="primary-image" />
                                                    <img src="assets/img/products/prod-9-2.jpg" alt="Product Image" className="secondary-image" />
                                                </a>
                                            </div>
                                            <div className="airi-product-action">
                                                <div className="product-action">
                                                    <a className="quickview-btn action-btn" onClick={this.handleShow}    >
                                                        <span>
                                                            <i className="dl-icon-view"></i>
                                                        </span>
                                                    </a>
                                                    <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                                                        <i className="dl-icon-cart29"></i>
                                                    </a>
                                                    <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                                                        <i className="dl-icon-heart4"></i>
                                                    </a>
                                                    <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                                                        <i className="dl-icon-compare"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="product-info">
                                            <h3 className="product-title">
                                                <a href="product-details.html">Jogging trousers</a>
                                            </h3>
                                            <span className="product-price-wrapper">
                                                <span className="money">$49.00</span>
                                                <span className="product-price-old">
                                                    <span className="money">$60.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <a href="shop-sidebar.html" className="heading-button">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Modal show={this.state.show} onHide={this.handleClose} className="product-modal" aria-labelledby="contained-modal-title-sm">
                    <Modal.Body>
                        <Button onClick={this.handleClose} className="custom-close" >
                            <i className="dl-icon-close mfp-close"></i>
                        </Button>
                            <div className="row">
                                <div className="col-md-6">
                                    <Slider images={this.state.images} />
                                    {/* <div className="airi-element-carousel product-image-carousel nav-vertical-center nav-style-1"
                                            data-slick-options='{
                                                "slidesToShow": 1,
                                                "slidesToScroll": 1,
                                                "arrows": true,
                                                "prevArrow": "dl-icon-left",
                                                "nextArrow": "dl-icon-right"
                                            }'>
                                        <div className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-9-1.jpg" alt="Product Image" className="primary-image" />
                                                </a>
                                            </div>
                                            <span className="product-badge sale">sale</span>
                                        </div>
                                        <div className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-10-1.jpg" alt="Product Image" className="primary-image" />
                                                </a>
                                            </div>
                                            <span className="product-badge new">new</span>
                                        </div>
                                        <div className="product-image">
                                            <div className="product-image--holder">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/prod-11-1.jpg" alt="Product Image" className="primary-image" />
                                                </a>
                                            </div>
                                            <span className="product-badge hot">hot</span>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="modal-box product-summary">
                                        <div className="product-navigation mb--10">
                                            <a href="#" className="prev"><i className="dl-icon-left"></i></a>
                                            <a href="#" className="next"><i className="dl-icon-right"></i></a>
                                        </div>
                                        <h3 className="product-title mb--15">Waxed-effect pleated skirt</h3>
                                        <span className="product-price-wrapper mb--20">
                                            <span className="money">$49.00</span>
                                            <span className="product-price-old">
                                                <span className="money">$60.00</span>
                                            </span>
                                        </span>
                                        <p className="product-short-description mb--25 mb-md--20">Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                        <div className="product-action d-flex flex-row align-items-center mb--30 mb-md--20">
                                        <div className="quantity">
                                            <input type="number" className="quantity-input" name="qty" id="quick-qty" value="1" min="1" />
                                            <div className="dec qtybutton">-</div>
                                            <div className="inc qtybutton">+</div>
                                        </div>
                                            <button type="button" className="btn btn-style-1 btn-semi-large add-to-cart" onClick="window.location.href='cart.html'">
                                                Add To Cart
                                            </button>
                                            <a href="wishlist.html"><i className="dl-icon-heart2"></i></a>
                                            <a href="compare.html"><i className="dl-icon-compare2"></i></a>
                                        </div>
                                        <div className="product-extra mb--30 mb-md--20">
                                            <a href="#" className="font-size-12"><i className="fa fa-map-marker"></i>Find store near you</a>
                                            <a href="#" className="font-size-12"><i className="fa fa-exchange"></i>Delivery and return</a>
                                        </div>
                                        <div className="product-summary-footer d-flex justify-content-between flex-sm-row flex-column flex-sm-row flex-column">
                                            <div className="product-meta">
                                                <span className="sku_wrapper font-size-12">SKU: <span className="sku">REF. LA-887</span></span>
                                                <span className="posted_in font-size-12">Categories: <a href="shop-sidebar.html" rel="tag">Fashions</a></span>
                                            </div>
                                            <div className="product-share-box">
                                                <span className="font-size-12">Share With</span>
                                                <ul className="social social-small">
                                                    <li className="social__item">
                                                        <a href="facebook.com" className="social__link">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="social__item">
                                                        <a href="twitter.com" className="social__link">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="social__item">
                                                        <a href="plus.google.com" className="social__link">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                    <li className="social__item">
                                                        <a href="plus.google.com" className="social__link">
                                                            <i className="fa fa-pinterest-p"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default trending