import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, descrption, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://images.macrumors.com/t/hAsmJ7ZKv3Ew20b9Hwrnc9ho77c=/400x0/article-new/2024/02/visionOS-Home-Screen.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span
                style={{
                  backgroundColor: "Yellow",
                  fontSize: "10px",
                  height: "14px",
                  left: "90%",
                  width: "80px",
                }}
                className="position-absolute top-0 start-100 translate-middle rounded-pill"
              >
                {!source ? "Unknown" : source}
              </span>{" "}
            </h5>
            <p className="card-text">{descrption}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Expand
            </a>
            <p className="card-text">
              <small
                className="text-mutxed"
                style={{ color: "rgb(176 20 242)", fontSize: "11px" }}
              >
                By {!author ? "unknown" : author} at{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </>
    );
  }
}
