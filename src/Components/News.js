// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
//   static defaultProps={
//     country: 'in',
//     pageSize: 15,
//     category: 'general'
//   }

//   static propTypes={
//     country:PropTypes.string,
//     pageSize:PropTypes.number,
//     category: PropTypes.string
//   }

//   capitalizeFirstLetter=(string)=> {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor(props){
//     super(props)
//     this.state={
//       articles: [],
//       loader: false,
//       totalResults: 0,
//       page: 1,
//     }
//     document.title=`NewsCart-${this.capitalizeFirstLetter(props.category)}`;
//   }

//   async updateNews(){
//     props.setProgress(10);
//     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({loader: true});
//     let data = await fetch (url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     this.setState({articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loader: false
//     })
//     props.setProgress(100);
//   }

//   async componentDidMount(){
//     // console.log("comand state")
//     // var url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c81da5f37bd4775bb6e7a3ab66f71ef&page=1&pageSize=${props.pageSize}`;
//     // this.setState({loader: true});
//     // let data = await fetch (url)
//     // let parsedData = await data.json();
//     // console.log(parsedData);
//     // this.setState({articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loader: false
//     // })
//     this.updateNews();
//   }

//   // handlePrev= async ()=>{
//   //   // var url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c81da5f37bd4775bb6e7a3ab66f71ef&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//   //   // this.setState({loader: true});
//   //   // let data = await fetch (url)
//   //   // let parsedData = await data.json();
//   //   // console.log(parsedData);
//   //   // this.setState({articles: parsedData.articles,
//   //   //   page: this.state.page - 1,
//   //   //   loader: false
//   //   // })
//   //   this.setState({page: this.state.page - 1})
//   //   this.updateNews();
//   // }

//   // handleNext=async ()=>{
//   //   // if(this.state.page + 1>Math.ceil(this.state.totalResults/10)){

//   //   // }
//   //   // else{
//   //   //   var url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c81da5f37bd4775bb6e7a3ab66f71ef&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//   //   //   this.setState({loader: true});
//   //   // let data = await fetch (url)
//   //   // let parsedData = await data.json();
//   //   // this.setState({articles: parsedData.articles,
//   //   //   page: this.state.page + 1,
//   //   //   loader: false
//   //   // })
//   //   // }
//   //   this.setState({page: this.state.page + 1})
//   //   this.updateNews();
//   // }

//   fetchMoreData = async() => {
//     this.setState({page: this.state.page + 1})
//     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch (url);
//     let parsedData = await data.json();
//     this.setState({articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loader: false
//     })
//   };

//   render() {
//     return (
//       <>
//         <h1 className='text-center'>NewsCart - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1>
//         {this.state.loader && <Spinner/>}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader= {<Spinner/>}
//         >
//         <div className="container">
//         <div className="row">
//           {this.state.articles.map((element)=>{
//             return(
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem title={element.title?element.title.slice(0,44)+'...':''} description={element.description?element.description.slice(0, 88)+'...':''} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
//               </div>
//             )
//           })}
//           </div>
//           </div>
//           </InfiniteScroll>
//           {/* <div className="container d-flex justify-content-between">
//             <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous </button>
//             <button type="button" disabled={this.state.page + 1>Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>          
//           </div> */}
//       </>
//     )
//   }
// }

// export default News

import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch (url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title=`NewsCart-${capitalizeFirstLetter(props.category)}`;
    updateNews();
  }, [])

  const fetchMoreData = async() => {
    // if(page + 1>Math.ceil(totalResults/10)){
    //   }
    //   else{
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoading(true);
        let data = await fetch (url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
      // }
  };

  return (
          <>
            <h1 className='text-center' style={{marginTop:"70px"}}>NewsCart - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader= {loading && <Spinner/>}
            >
            <div className="container">
            <div className="row">
              {articles.map((element)=>{
                return(
                  <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,44)+'...':''} description={element.description?element.description.slice(0, 88)+'...':''} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                  </div>
                )
              })}
              </div>
              </div>
              </InfiniteScroll>
              
          </>
        )
}

export default News