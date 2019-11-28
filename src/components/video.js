import React, { Component } from 'react'
import VideoModal from "./videomodal"

export class video extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        lgShow: false
      };
    }
  
    render() {
        let lgClose = () => this.setState({ lgShow: false });
        return (
            <div>
                <div className="video-cnt">
                    <div className="video-section-area pt--80 pb--40 pt-md--60 pb-md--30">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="text-block">
                                        <figure className="mb--30 mb-md--20 max-w-60">
                                            <img src="assets/img/logo/m01-logo.svg" alt="logo" />
                                        </figure>
        
                                        <p className="font-2 heading-color font-size-16 mb--30 mb-md--20">Integer ut ligula quis lectus fringilla elementum porttitor sed est. Fringilla efficitur ligula sed lobortis. Sed tempus faucibus mi, quis fringilla mauris lacinia sed. Integer vehicula egestas nunc ac facilisis. Nam bibendum non faucibus libero eu. Curabitur posuere to ullamcorper</p>
                                        <a href="shop-sidebar.html" className="heading-button mb-sm--30">Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <figure className="image-box image-box-w-video-btn">
                                        <a onClick={() => this.setState({ lgShow: true })} className="video-popup">
                                            <img src="assets/img/banner/m01-img1.jpg" alt="banner" />
                                            <span className="video-btn"></span>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoModal show={this.state.lgShow} onHide={lgClose} />
            </div>
        )
    }
}

export default video
