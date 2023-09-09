import React from 'react'
import '../styles/footer.scss'
import { makeStyles } from '@mui/icons-material';
import { Facebook, Twitter, Instagram,LinkedIn, GitHub, Telegram } from '@mui/icons-material';

function Footer() {
  return (
    <div className='footer'>
      <h1>
        PeakShape
      </h1>
      <h3>Feel free to reach us out on any of these platforms</h3>
      <hr style={{width:"70%", margin:"0 auto" ,color:"rgb(137, 137, 138)"}}/> 
      <div className='footer-icons'> 
      <ul>
    <li><a href="https://www.linkedin.com/in/bharti-sahani-25a250188/" target="_blank" rel="noopener noreferrer"> <LinkedIn style={{ color: '#45505B',fontSize: 30  }} /></a></li>


    <li><a href="https://github.com/bharti147" target="_blank" rel="noopener noreferrer"> <GitHub style={{ color: '#45505B',fontSize: 30  }}/> </a></li>


    <li><a href="https://www.instagram.com/sahanibharti71/" target="_blank" rel="noopener noreferrer"> <Instagram style={{ color: '#45505B',fontSize: 30  }}/></a></li>


    <li><a href="" target="_blank" rel="noopener noreferrer"> <Telegram style={{ color: '#45505B',fontSize: 30  }}/> </a></li>
     </ul>
    

      </div>
      <hr style={{width:"70%", margin:"0 auto", color:"rgb(137, 137, 138)"}}/>
      <p>PeakShape © 2023 | by Bharti Sahani</p>
    </div>
  )
}

export default Footer
