import React,{Component} from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Slider.css'

class slider extends Component {
    
     

    render() { 
      
        
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: Number(this.props.slidesToShow),
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:1000,
            fade:this.props.fade ? true : false,
            pauseOnHover:true,
            responsive:this.props.product ? [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ] :null
          };

         
        // const images = this.props.product ?  this.props.product.img : this.props.images
        const images =  this.props.images;
        const products = this.props.product;
        

        return ( <div>
           
            <Slider {...settings}>
            { images ? images.map(img=>{
                return <Link to={`/home/${img}`}><div  key={img}>
                         <img className='SliderImg' 
                        key={img} 
                        src={img} 
                        alt={img}/> 
                        
                        </div>
                        </Link>
            })
        :null}
            </Slider>
          </div> );
    }
}
// const mapDispatchToProps = dispatch => {
//   return{
//       testing:(name)=>dispatch({type:'TEST',name:name})
//   }
// }
 
export default slider;