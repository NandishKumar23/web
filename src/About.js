import React from 'react'
import './About.css'
import {Animation} from 'react-animate-style'

    function About() {
  return (
    <Animation  animationIn="slideInRight" 
    animationOut="zoomOut" 
    animationInDuration={4000} 
    animationOutDuration={2000} 
    isVisible={true} >

   
    <div className='About' >
         <div className='Content' >
               <p className='about_heading'>About</p>
               <p className='about_who'>Who Am I?</p>
               <p className='about_content'>I am a  grad student from JSS Academy Of Technical Education,Bangalore with Computer Science  as my major.I love exploring new technologies and often amazed by the progress we as a human species have made so far in the recent years (apart from the headphone-jack part!!)</p>
               <p className='about_content'>I have started reflecting my ideas and thoughts through the medium of words recently so spelling and grammar mistakes are very often.You can write me back if you spot any :P</p>
         </div>
         <div>
          <p className='about_what'>What I Do ?</p>
          <h3>Here are Some Of My Expertise</h3>
         </div>
    </div>
    </Animation>
  )
}

export default About