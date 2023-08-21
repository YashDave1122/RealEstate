import React from 'react'

import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2' ;

const Contact = () => {
  return (
   <section className="c-wrapper">
    <div className="padding innerWidth flexCenter c-container">
        {/* left side */}
         <div className="flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="seceondaryText">  We always ready go help by providing the best 
                     services for you </span>    
                <div className="flexColStart contactModes">
                  {/* first row */}
                  <div className="flexStart row">
                    <div className="flexColCenter mode">
                      <div className="flexStart row">
                        <div className="flexCenter icon">
                          <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                          <span className="primaryText">Call</span>
                          <span className='secondaryText'>021 123 145 14</span>
                        </div>
                      </div>
                      <div className="flexCenter button">
                        Call Now
                      </div>
                    </div>
                    {/* second mode */}
                    <div className="flexColCenter mode">
   <div className="flexStart">
     <div className="flexCenter icon">
       <BsFillChatDotsFill size={25}/>
     </div>
     <div className="flexColStart detail">
       <span className="primaryText">Chat</span>
       <span className='secondaryText'>021 123 
145 14</span>
     </div>
   </div>
   <div className="flexCenter button">
     Chat Now
   </div>
                  </div>
                  </div>
                </div>
                {/* second row */}
                <div className="flexStart row">
                <div className="flexColCenter mode">
  <div className="flexStart row">
    <div className="flexCenter icon">
      <BsFillChatDotsFill size={25}/>
    </div>
    <div className="flexColStart detail">
      <span className="primaryText">Video Call</span>
      <span className='secondaryText'>021 123 
145 14</span>
    </div>
  </div>
  <div className="flexCenter button">
    Video Call Now
  </div>
</div>
</div>
                {/* forth mode */}
                <div className="flexStart rowz1">
                <div className="flexColCenter mode">
  <div className="flexStart row">
    <div className="flexCenter icon">
      <HiChatBubbleBottomCenter size={25}/>
    </div>
    <div className="flexColStart detail">
      <span className="primaryText">Message</span>
      <span className='secondaryText'>021 123 
145 14</span>
    </div>
  </div>
  <div className="flexCenter button">
   Message Now
  </div>
</div>
</div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
            
</div>
         {/* right side */}
         <div className="right-side">
           <div className="image-container4">
            <img src="./contact.jpg" alt="" className="full-image"/>
           </div> 
         </div>

    </div>
   </section>
  )
}

export default Contact