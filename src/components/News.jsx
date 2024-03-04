import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {

  const [articles, setArticals] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category${props.category}&apiKey=b7129361a7994282bc7a7803bf35d65b&page=${page}&pageSize=${props.pageSize}`;
    setLoading(false)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(60);
    setArticals(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(true)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews();

  }, [])


  const fetchMoreData = async () => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category${props.category}&apiKey=b7129361a7994282bc7a7803bf35d65b&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticals(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)

  };



  return (
    <>
      <h1 className='justify-content-center d-flex p-5'>News Headlines</h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>loading...</h4>}
      >
        <div className='container'>
          <div className="row">

            {articles.map((element) => {
              return <div className='col-4 my-3' key={element.url}>
                <Newsitems title={element.title} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                  author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
        </div>
      </InfiniteScroll>


    </>
  )

}

News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News
