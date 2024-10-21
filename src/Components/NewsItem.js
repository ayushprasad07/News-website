import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card my-3">
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "190px" }}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
             <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>{source}</span>
             <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} published at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;