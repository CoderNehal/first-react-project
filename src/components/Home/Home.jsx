import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Ads from '../Ads/Ads';
import Spinner from '../Loading/Loading';
import { Link } from 'react-router-dom';
import db from '../../Firebase/Firebase';
import DealsOfTheDay from './DealOfTheDay/DOT';
import Categories from './Categories/Categories';
import LA from './LA/LA';
import Offer from './Offer/Offer';
import Carousel from './Carousel/Carousel';
import Ad from '../../images/1745 - Copy.jpg';
import Ad2 from '../../images/black-friday-themed-online-shopping-design-black-background_145865-156.jpg';
import Trending from './Trending/Trending';

// import Slider from '../slider/slider'
//import Slider from 'react-slick'

class Home extends Component {
	state = {
		navbar: false,
		Loading: true,
		imgs: [],
	};
	componentDidMount() {
		db.collection('carousel')
			.get()
			.then((snapshot) => {
				const images = [];
				snapshot.docs.forEach((doc) => {
					const data = doc.data();
					images.push(data.images);
				});

				this.setState({ imgs: images[0] });

				this.setState({ Loading: false });
			});
		this.setState({ Loading: true });
	}

	render() {
		// const changeBackground = ()=>{
		//   if(window.scrollY > 79){
		//    this.setState({ navbar: true });
		//   }
		//   else{
		//     this.setState({ navbar: false  });
		//   }
		// }
		// window.addEventListener('scroll',changeBackground)

		var html = (
			<>
				<Navbar nav={this.state.navbar} />
				<Carousel imgs={this.state.imgs} />
				<div className='containar'>
					<Categories />

					<div className='categoriesHeading'>
						<h3 id='categories'>Top Selling</h3>
						<p id='more'>
							<Link>more &gt;</Link>
						</p>
					</div>
				</div>
				<hr />
				<Trending />
				{/* <div className='topSellingShelf-parent'>
					
				</div> */}
				<hr />
				<Ads Ad={Ad2} />
				<DealsOfTheDay />
				<Ads Ad={Ad} />
				<LA />
				<Offer />
				<div className='footer'>
					Made with ❤️ by{' '}
					<a href='https://www.instagram.com/nehal_ughade_2244/'> Nehal </a> and{' '}
					<a href='https://www.instagram.com/tushar_vithoba/'> Tushar </a>
				</div>
			</>
		);
		return (
			<div style={{ position: 'relative' }}>
				{this.state.Loading ? <Spinner /> : html}
			</div>
		);
	}
}

export default Home;
