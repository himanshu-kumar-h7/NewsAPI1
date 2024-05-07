import React, { Component } from "react";


export default class Newsitem extends Component {
  

  render() {
    let { title, descrption,imageUrl,newsUrl } = this.props;
    return (
      <div>
        
        
             
             <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"> 
            {descrption}
            </p>
            <a href={newsUrl} target = "_blank" className="btn btn-primary"> 
              Expand
            </a>
          </div>
        
        </div>

        
      </div>
    );
  }
}
