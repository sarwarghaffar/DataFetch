import React from 'react'

const Newsitems = (props)=>{

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
      <div>

        <div className="card" >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: '20% !important' }}>
            {source}
          </span>

          <img src={!imageUrl ? "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/11/0/0/GettyImages-1140985597-copy.png?ve=1&tl=1" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">


            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Details</a>
          </div>
        </div>
      </div>
    )
  }

export default Newsitems
