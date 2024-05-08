import React, { Component } from "react";


export default class Newsitem extends Component {
  

  render() {
    let { title, descrption,imageUrl,newsUrl } = this.props;
    return (
      <>
        
        
             
             <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://images.macrumors.com/t/hAsmJ7ZKv3Ew20b9Hwrnc9ho77c=/400x0/article-new/2024/02/visionOS-Home-Screen.jpg" : imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> 
            {descrption}
            </p>
            <a href={newsUrl} target = "_blank" className="btn btn-primary"> 
              Expand
            </a>
          </div>
        
        </div>

        
      </>
    );
  }
}
