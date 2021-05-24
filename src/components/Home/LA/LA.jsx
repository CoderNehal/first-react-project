import React from 'react'
import './LA.css'
import {Link} from 'react-router-dom'
function LA() {
    return (
        <>
         <div className="LAHeading">
          <h3 id='categories'>Home Appliances</h3>
          <p id='more'><Link>more &gt;</Link> </p>
          </div>
          <div className="LA-Parent">
            <div className="LA-Background">
           
            </div>
            <Link className='link' to='/shop/zeyLDlc3yBmE8FqhE6tC'>
            <div className="LA-Product">
            
            <div id='imgBox'>
              <img src="https://rukminim1.flixcart.com/image/416/416/kg15ocw0/refrigerator-new/c/2/h/black-matte-na-motorola-original-imafwdfbsxgchhun.jpeg?q=70" alt=""/>
            </div>
           <div id="productInfo">
             <p className="ProdName">Motorola 533 L Smart Wifi Enabled Frost Free Multi-Door Refrigerator  (Black Matte, 533AFDMTB)</p>
             <div className="price">
               <p>₹82,999</p>
               <small>₹1,02,999</small>
             </div>
           </div>
           
              </div>
             </Link>
            <Link to='/shop/qkKz61MVGD9sKQfmMW0z'>
              <div className="LA-Product">
              <div id='imgBox'>
              <img src="https://rukminim1.flixcart.com/image/416/416/kcw9w280/washing-machine-new/6/m/w/fhm1208zdl-alsqeil-lg-original-imaftx4jxypzcwz5.jpeg?q=70" alt=""/>
            </div>
           <div id="productInfo">
           <p className="ProdName">LG 8 kg 5 Star Fully Automatic Front Load with In-built Heater Silver  (FHM1208ZDL.ALSQEIL)</p>
             <div className="price">
               <p>₹33,990</p>
               <small>₹40,990</small>
             </div>
           </div>
              </div>

              </Link>
            <Link className='link' to='/shop/HV3Y4aOMqEXzBCGgJ2rE'>
              <div className="LA-Product">
              <div id='imgBox'>
              <img src="https://rukminim1.flixcart.com/image/416/416/k5y7tzk0/microwave-new/g/a/e/magicook-30l-wine-magnolia-whirlpool-original-imafzhm4gtyhkhhw.jpeg?q=70" alt=""/>
            </div>
           <div id="productInfo">
           <p className="ProdName">Whirlpool 30 L Convection Microwave Oven  (MAGICOOK 30L Wine Magnolia, Wine)</p>
             <div className="price">
               <p>₹13,990</p>
               <small>₹22,000</small>
             </div>
           </div>
              </div>
              </Link>
          </div>
        </>
    )
}
export default LA
