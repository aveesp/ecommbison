import React, { Component } from 'react'
import Slider from "../components/slider"
import Video from "../components/video"
import Trending from "../components/trending"

export class homepage extends Component {
    state = {
        images: [
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
          ]
    }

    render() {
        return (
            <div className="main-content-wrapper">
                <Slider images={this.state.images} />
                <Video />
                <Trending />
            </div>
        )
    }
}

export default homepage
