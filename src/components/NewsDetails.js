import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let{title,description,imageurl,url}=this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageurl?"https://static.toiimg.com/thumb/msid-110874822,width-1070,height-580,imgsize-425023,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={url} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
