import React from 'react'
import './Sidebar.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/Coffee';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import myImage  from "./image.jpeg";




function Sidebar() {
  return (
    <div className='Sidebar'>

        <div className='My_data'>
          <img src={myImage} alt='author_image'></img>
          
         </div>
         <div className='Data'>
         <h1>Nandish Kumar S</h1>
         <span className='email'>
         <EmailOutlinedIcon/>"nandishkumar2312@gmail.com"
         </span>
         <div className='nav_links'>
            <ul>Introduction</ul> 
            <ul>About</ul>
            <ul>Timeline</ul>
         </div>
        <div className='Icons'>
        <ul> <a  href="https://www.linkedin.com/in/nandish-kumar-05918a215/"><LinkedInIcon/></a> </ul>
       <a href="https://github.com/NandishKumar23"><ul><GitHubIcon/></ul></a> 
        <a href='https://www.instagram.com/'><ul><InstagramIcon/></ul></a>
        <a href='https://www.facebook.com/nandish.kumar.98229'><ul><FacebookIcon/></ul></a>
        <a href='https://twitter.com/'><ul><TwitterIcon/></ul></a>
        </div>
       

        <div className='sidebar_text'>
<p>
    <small>
        "Made with"
        <FavoriteIcon/>
        "and"
        <CoffeeIcon/>
    </small>
</p>
        </div>

       
         </div>
         

    </div>
  )
}

export default Sidebar
