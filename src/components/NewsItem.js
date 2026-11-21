import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,newsUrl,name,author,time,mode,istrue}=this.props;
    function dblClick() {
      window.open(newsUrl, '_blank');
    }
    function todayNews(){
      const currentTime = new Date(time);
      const formattedLocalTime = currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata'});
      return formattedLocalTime;
    }
    function badge(time){
      const currentDate = new Date();
      const twentyFourHoursAgo = new Date(currentDate);
      twentyFourHoursAgo.setHours(currentDate.getHours() - 24);
      console.log("Current Date:", currentDate);
      console.log("24 Hours Ago:", twentyFourHoursAgo);
      const differenceInMs = currentDate - twentyFourHoursAgo;

      // Convert milliseconds to hours
      const differenceInHours = differenceInMs / (1000 * 60 * 60);
      
      console.log("Difference in hours:", differenceInHours);
      if(differenceInHours<=24) return false;
      else return true;
    }
    // function badge(time){
    //   const currentDate = new Date();
    //   const ans = currentDate.toISOString();
    //   const date1=new Date(time);
    //   const date2=new Date(ans);
    //   const differenceInMilliseconds = date2.getDate() - date1.getDate();
    //  // console.log("differenceInMilliseconds is: ",differenceInMilliseconds);
    //   if(differenceInMilliseconds>1) return false;
    //   else return true;
    // }
    return (
      <div className="my-3">
        <div className={`card bg-${mode} `} style={{ height: "25rem" }} >
          <img
            src={imageUrl}
            className="card-img-bottom card-img-top"
            alt="..."
            style={{ maxHeight: "12rem" }}
            onDoubleClick={dblClick}
          />
         {/* // {console.log("Is badge visible:", badge(time))} */}
          {badge(time) && <span className="badge text-bg-secondary position-absolute">New</span>}
          <div className={`card-body`}>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <h5
                className={`card-title text-${
                  istrue?(mode !== "light" ? "dark" : "light"):(mode === "light" ? "dark" : "light")
                  
                } `}
              >
                {title} {title.length >= 45 ? "..." : ""}
              </h5>
            </a>

            <p className={`card-text text-${ istrue?(mode !== "light" ? "dark" : "light"):(mode === "light" ? "dark" : "light")}`}>{description}{description.length >= 85 ? (
                <a href={newsUrl} target="_blank" rel="noreferrer">
                  see more...
                </a>
              ) : (
                ""
              )}
            </p>
            <figure
              className="text-end"
            >
              <blockquote className="blockquote" >
                <em
                  className={`text-${ istrue?(mode !== "light" ? "dark" : "light"):(mode === "light" ? "dark" : "light")}`}
                  style={{ fontSize: "1rem", textShadow: "3px 0px 10px gold" }}
                >
                  {name}
                </em>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite
                  title={`Source Title text-${
                    istrue?(mode !== "light" ? "dark" : "light"):(mode === "light" ? "dark" : "light")
                  }`}
                >
                 {new Date(time).toUTCString()} by {author}
                </cite>
              </figcaption>
            </figure>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
              style={{ position:"relative", bottom:" 68px"}}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
