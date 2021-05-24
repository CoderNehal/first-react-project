import React from 'react'
import './Carousel.css'
import {Link} from 'react-router-dom'
const Carousel = ({imgs})=> {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
  
        <div className="carousel-inner">
          <div className="item active">
            <Link to='/collection'><img src={imgs[0]} alt="p1"  /></Link>
          </div>
    
          <div className="item">
          <Link to='/collection'><img src={imgs[1]}alt="p2"  /></Link>
          </div>
        
          <div className="item">
          <Link to='/collection'><img src={imgs[2]} alt="p3"  /></Link>
          </div>
          
         
          
        </div>
    
        
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Carousel
