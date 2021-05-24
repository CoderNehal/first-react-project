import React from 'react'
import './TopSelling.css'
import {Link} from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
function TopSelling() {
    return (
        <div className="TopSellingHeading">
        <h3 id='categories'>Top Selling</h3>
        <p id='more'><Link to='/collection'>more &gt;</Link></p>
        <Splide
			options={{
				type: 'loop',
				gap: '1rem',
                perPage:3,
				autoplay: true,
				pauseOnHover: false,
				resetProgress: false,
				arrows: 'slider',
				rewind: true,
				
                height:100
			}}
			
			
			>
			<SplideSlide key='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
					alt='nothing'
				/>
			</SplideSlide>

			<SplideSlide key='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
					alt='nothing'
				/>
			</SplideSlide>
            <SplideSlide key='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
					alt='nothing'
				/>
			</SplideSlide>

			<SplideSlide key='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
					alt='nothing'
				/>
			</SplideSlide>
            <SplideSlide key='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
					alt='nothing'
				/>
			</SplideSlide>

			<SplideSlide key='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
					alt='nothing'
				/>
			</SplideSlide>
		</Splide>
        </div> 
    )
}

export default TopSelling
