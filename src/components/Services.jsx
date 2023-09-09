import React from 'react'
import '../styles/services.scss'
import Facilities from './Facilities'
import Exercises from './Exercises'


function Services() {
  return (
   <div className='services'>
<div className='services1' id="services">
<h1>The Best Programs We Offer For You</h1>
<p> At PeakShape Gym, we offer a comprehensive range of services to help you achieve your fitness goals. 
        Our certified trainers are dedicated to providing you with top-notch fitness 
        solutions tailored to your individual needs. </p>
</div>
<Facilities/>
<Exercises/>

   </div>
  )
}

export default Services
