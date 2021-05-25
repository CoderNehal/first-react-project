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



class Home extends Component {
	state = {
		navbar: false,
		Loading: true,
		imgs: [],
		TrendingProducts: [
			{
				id: 'fEWN9QvqrUYs8hY67mRy',
				name: 'Apple Watch Series 5 Space Gray Aluminium Case',
				price: 52499,
				discount: 20,
				img: 'https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._AC_SL1500_.jpg',
			},
			{
				id: 'tfefBcs7JHGZ0DbntQ0s',
				name: 'ASUS ROG Zephyrus G14, 14 FHD 120Hz, Ryzen 7',
				price: 139990,
				discount: 10,
				img: 'https://images-na.ssl-images-amazon.com/images/I/71AcVXyqTQL._SL1500_.jpg',
			},
			{
				id: 'knA9t1aE9A02JjFHN7dp',
				name: 'New Apple iPhone 12 Pro Max (128GB) - Silver',
				price: 1259000,
				discount: 3,
				img: 'https://m.media-amazon.com/images/I/71umuN8XVeL._AC_SL1500_.jpg',
			},
			{
				id: 'fEWN9QvqrUYs8hY67mRy',
				name: 'Apple Watch Series 5 Space Gray Aluminium Case',
				price: 52499,
				discount: 20,
				img: 'https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._AC_SL1500_.jpg',
			},
			{
				id: 'fs2LoqZKXwXutiFMmeJc',
				name: 'OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)',
				price: 43000,
				discount: 10,
				img: 'https://m.media-amazon.com/images/I/71CuwgwCQdL._AC_SL1500_.jpg',
			},
		],
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
					<Ads Ad={Ad2} />
					<div className='categoriesHeading'>
						<h3 id='categories'>Top Selling</h3>
						<p id='more'>
							<Link>more &gt;</Link>
						</p>
					</div>
				</div>
				<hr />
				
				<div className='topSellingShelf-parent'>
					{this.state.TrendingProducts.map((product) => {
						return <Trending key={product.id} data={product} />;
					})}
				</div>
				<hr />
				
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
