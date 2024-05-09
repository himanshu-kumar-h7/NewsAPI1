import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  
  static defaultProps = {
    pageSize : 6,
    country : 'in',
    category : 'health',
  }
  static propTypes = {
    pageSize : PropTypes.number,
    country : PropTypes.string,
    category : PropTypes.string
  }
  
 
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d62630a63ecf47ddb0794932654a7c8b&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState ({ articles: parsedData.articles,
      totalResults : parsedData.totalResults,
    loading : false });
  }
   handlePrevious = async ()=> {
console.log("Previous page")
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d62630a63ecf47ddb0794932654a7c8b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
this.setState({loading : true})
let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
   
    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles,
      loading : false 
      
    })
  }
  handleNext = async () => {
console.log("Next page");
if(!(this.state.page + 1 > (Math.ceil(this.state.totalResults/6)) )){

 
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d62630a63ecf47ddb0794932654a7c8b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles }
  )}
  }
  render() 
  {
    return (
      <div className="container">
        <h5 className="text-center my-3" style={{ color: "Purple" }}>Top Headlines for the Day</h5>
        {this.state.loading && <Spinner />}
        

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
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page <=1} type="button" className="btn btn-secondary glyphicon glyphicon-chevron-right " onClick={this.handlePrevious}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-secondary" onClick={this.handleNext}>Next &rarr;</button>
          
        </div>
      </div>
    );
  }
}