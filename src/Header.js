import React from 'react'
import Product from "./Product"
import './Header.css'
import {Animation} from 'react-animate-style'

import Timeline from './Timeline';
function Header() {
  return (
     
    <div className='Header'>
    <div className='Header_container'>
    <Animation  animationIn="slideInUp" 
    animationOut="zoomOut" 
    animationInDuration={5000} 
    animationOutDuration={2000} 
    isVisible={true} >

    <div className='Header_row'>
    <Product
     id="123"
      Icon="https://cdn5.vectorstock.com/i/1000x1000/06/89/web-development-icon-vector-21010689.jpg"
      title="Full Stack Web Development"
      description="I have experience utilising JavaScript, React, HTML,CSS NODEJS and Database(MongoDB,Firebase) to create websites"
     />
     

<Product
      id='1234'
      Icon="https://www.shutterstock.com/image-vector/data-structure-icon-showing-algorithms-260nw-1188463339.jpg"
      title="Data Structure And Algorithms"
      description="I have a good understanding of the DSA's core concepts because of my expertise in computer science."
    />

</div>
</Animation>
<div >
  <p className='Timeline_text'>HighLights</p>
  <p className='timeline'>Timeline</p>
</div>


 <Animation  animationIn="slideInLeft" 
    animationOut="zoomOut" 
    animationInDuration={5000} 
    animationOutDuration={2000} 
    isVisible={true} >
<div className='time_component'>
<Timeline
  head="Internship"
  content="My web development internships at Trando Technologies and Exposys Data Labs are complete, and I'm interested in continuing to work in this sector in the future."
/>
</div>
<div className='time_component'>
<Timeline
  head="Primary and Higher Education"
  content="I have completed my primary and higher schooling, and having a background in computer science and maths has greatly aided me in solving numerous  challenges in the actual world."
/>
</div>
    </Animation>



    
    </div>
    
    
        
    </div>
  )
}

export default Header