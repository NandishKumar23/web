import React from 'react'
import About from './About'
import './Banner.css'
import Header from './Header'
function Banner() {
  return (
      <div>
      <header className='banner'
    style={{
      backgroundSize:"cover",
      backgroundImage:`url("https://cdn.pixabay.com/photo/2016/11/22/22/54/desktop-1851043_1280.jpg ")`,
      backgroundPosition:"center center"
      
    }}>
    <div className='banner_content'>
     <h1 className='banner_title'> Hi!!! I'm Nandish <br/>
                     I love building things and coffee.
     </h1>
     <div className='Banner_buttons'>
      <button className='banner_button' onClick={()=>
      window.location.href="https://github.com/NandishKumar23"}>My Projects</button>
      
     </div>

    </div>

    </header>
     <About/>
    <div className='Header_render'>
    <Header/>
     </div> 
    
    </div>
    
    
  )
}

export default Banner














