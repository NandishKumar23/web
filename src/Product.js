import React from 'react'
import './Product.css'
function Product({Icon,title,description}) {
  return (
    <div className='Product'>
         <img src={Icon}></img>
        <div className='product_info'>
              
            <h3 className='product_title'>{title}</h3>
            <p className='product_description'>
                {description}
            </p>

        </div>

    </div>
  )
}

export default Product

