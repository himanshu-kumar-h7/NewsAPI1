import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=apple&from=2024-05-07&to=2024-05-07&sortBy=popularity&apiKey=d62630a63ecf47ddb0794932654a7c8b";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState ({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container ">
        <h5 style={{ color: "red" }}>Top Headlines</h5>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  descrption={
                    element.description 
                  }
                  // if it is null then descrption={(element.description ? element.description.slice(0,45) : "")}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
