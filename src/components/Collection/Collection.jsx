import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import CollectionCard from './CollectionCard/CollectionCard'
import './Collection.css'
import Spinner from '../Loading/Loading'

const Collection = () => {
  const [img] = useState(['https://images.unsplash.com/photo-1610602699083-1d70b860505b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://rukminim1.flixcart.com/image/416/416/k7285u80/refrigerator-new/x/j/e/gl-d241abcy-4-lg-original-imafpe2k34hfucsz.jpeg?q=70',
  'https://images.pexels.com/photos/1842/nature-photography-analog-camera-canon.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://cdn.pocket-lint.com/r/s/1200x/assets/images/149273-smartwatches-review-review-samsung-galaxy-watch-active-2-review-image1-p9yzh8q5ja.jpg',
  'https://i.gadgets360cdn.com/large/mi_led_tv_website_1548963114463.jpg',
  'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'])


  const [Loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 800);
 

  var html = (
    <div className='collection'>
          <Link to={{
            pathname:'/search/mobile',
            Props:'mobile'
          }}>
           <CollectionCard img={img[0]} text='Mobiles' />
          </Link> 
          <Link to={{
            pathname:'/search/headphones',
            Props:'headphones'
          }}>
          <CollectionCard img={img[1]} text='Headphones'/>
          </Link>
          <Link to={{
            pathname:'/search/laptops',
            Props:'laptops'
          }}>
          <CollectionCard img={img[2]} text='Laptops'/>
          </Link>
          <Link to={{
            pathname:'/search/cameras',
            Props:'cameras'
          }}>
          <CollectionCard img={img[4]} text='Cameras'/>
          </Link>
          <Link to={{
            pathname:'/search/TVs',
            Props:'tvs'
          }}>
          <CollectionCard img={img[6]} text='TVs'/>
          </Link>
          <Link to={{
            pathname:'/search/smart watches',
            Props:'smart watches'
          }}>
          <CollectionCard img={img[5]} text='Smart Watches'/>
          </Link>
          <Link to={{
            pathname:'/search/big appliances',
            Props:'LA'
          }}>
          <CollectionCard img={img[3]} text='Big Appliances'/>
          </Link>
          <Link to={{
            pathname:'/search/other',
            Props:'other'
          }}>
          <CollectionCard img={img[7]} text='Other'/>
          </Link>

        </div>
  );
    return (
      <div className="">
       {Loading? <Spinner /> : html}
      </div>
        
    )
}

export default Collection
