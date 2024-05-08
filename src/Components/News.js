import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNN",
      "title": "Noem suggests Biden’s dog Commander should suffer a similar fate to Cricket, the dog she shot - CNN",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiUmh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNS8wNS9wb2xpdGljcy9rcmlzdGktbm9lbS1kb2ctY29tbWFuZGVyLWJpZGVuL2luZGV4Lmh0bWzSAUtodHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDI0LzA1LzA1L3BvbGl0aWNzL2tyaXN0aS1ub2VtLWRvZy1jb21tYW5kZXItYmlkZW4?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-05-06T03:56:00+00:00",
      "content": null
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Joe Root leads PCA calls for schedule change in domestic cricket",
      "description": "Joe Root is leading calls from players to reduce the amount of domestic cricket and review a schedule that is “not fit for purpose”.",
      "url": "http://www.bbc.co.uk/sport/cricket/articles/cqvn97dvvd8o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/121f/live/147f9d40-0b33-11ef-b682-33c109fb50aa.jpg",
      "publishedAt": "2024-05-06T00:07:14.0421759Z",
      "content": "The Blast, mainly taking place in June and July this year, is a particular pinch point of the schedule, with counties wanting to host games from Thursdays to Sundays in order to maximise attendances.… [+1336 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Sudiksha Kochi",
      "title": "North Dakota Gov. Kristi Noem defends killing dog, addresses false anecdote about meeting Kim Jong Un",
      "description": "South Dakota Republican Gov. Kristi Noem in a new interview defended her decision to kill her dog Cricket.",
      "url": "https://www.usatoday.com/story/news/politics/elections/2024/05/05/kristi-noem-dog-kim-jong-un/73579149007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/30/USAT/73509918007-20230909-t-013221-z-782958407-rc-2-p-43-ajgb-8-r-rtrmadp-3-usatrump.JPG?crop=5499,3094,x0,y286&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2024-05-05T17:17:25+00:00",
      "content": "WASHINGTON South Dakota Republican Gov. Kristi Noem in a new interview defended her decision to kill her dog Cricket, saying that it was a dangerous animal and that she was protecting her children.\r\n… [+2010 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
          articles : this.articles,
          loading : false
    }
  }

  render() {
    return (
      <div className="container ">
        <h5 style={{ color: "red" }}>Top Headlines</h5>
        
        <div className="row">
        {this.state.articles.map((element)=>{ 
         return <div className="col-md-4" key={element.url}>
          <Newsitem
          
            title={element.title}
            descrption={(element.description)}
            imageUrl={element.urlToImage}
            newsUrl={element.url}x
          />
        </div>
        

})}
          
          
          
        </div>
      </div>
    );
  }
}
