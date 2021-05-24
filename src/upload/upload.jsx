import db from '../Firebase/Firebase'
import React from 'react'

function upload() {
   const custoStyle ={
    display:'flex',
    flexDirection:'column',
    padding:'10px',
    marginTop:'15px'
    }

const submitData = (e) =>{
  var name = document.getElementById('nametoupload').value
  var brand =document.getElementById('brand').value
  var discount =document.getElementById('discount').value
  var img= document.getElementById('img').value
  var type =document.getElementById('type').value
  var price =document.getElementById('price').value
 

  db.collection('products').add({
      name:name,
      brand:brand,
      discount:Number(discount),
      img:img,
      type:type,
      price:Number(price),
      specs:["OnePlus Dash Charging Cable: Unmatched speed and efficiency, 60% charging capacity in around 30 minutes with this fast charge type-c cable and OnePlus enable charger. It also allows for 480Mbps data transmission simultaneously",

    'OnePlus Dash Charge Type-C Cable: It supports 5V 4A fast charge for OnePlus 7T, OnePlus 7 Pro, OnePlus 7, OnePlus 6T, OnePlus 6, OnePlus 5T, OnePlus 5, OnePlus 3T, OnePlus 3, OnePlus Bullets Wireless 2, OnePlus Bullets Wireless. Note: It Does Not support fast charge for other brands smartphone.',

'OnePlus Dash Cable: 1m/ 3ft length, it provides flexible charging when you lie on the couch, in the car backseat or on office',

'Dash Charge USB C Cable: Underneath the premium TPE coating, broad internal cabling made of copper and nickel ensures that power reaches your OnePlus smart-phone faster and cooler than ever before, even while you are playing games or watching movies, let you enjoy safety charging at ease',

"[WARRANTY] 12-months warranty and friendly customer services, ensures the long-time enjoyment of your purchase. If you meet any question or problem, please don't hesitate to contact us"

]
  }).then(
      alert('data upload successfull')
  )
}
    return (
        <div style={custoStyle}>
           Name: <input type="text" name="" id="nametoupload"/>
           Brand: <input type="text" name="" id="brand"/>
           discount: <input type="number" name="" id="discount"/>
           img: <input type="text" name="" id="img"/>
           type: <input type="text" name="" id="type"/>
           Price: <input type="number" name="" id="price"/>
           <input type="button" value='Submit' name="" onClick={submitData} id=""/>
        </div>
    )
}

export default upload
