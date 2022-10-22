import React, {  useRef, useState , } from 'react';
import emailjs from "@emailjs/browser";
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../Wrapper';

import './Footer.scss';

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const sendEmail =(e)=>{
  
    e.preventDefault();
    
    
    emailjs.sendForm('service_drh37si', 'template_ysbpg9l', form.current, 'NcGks2WGqxQYHfBC6')
    .then((result) => {
        alert(" your message is Sended")
        setLoading(false);
    }, (error) => {
        console.log(error.text);
        
     
    });


};



  
  

 



    

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:rao18to21@gmail.com" className="p-text">rao18to21@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91  92654 78413" className="p-text">+91  92654 78413</a>
        </div>
      </div>
   
      
      
      
     
      
      


        
        <form className="app__footer-form app__flex "  ref={form}  >
          
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email"  />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              
              name="message"
              
            />
    
          </div>
         


         
          <button onClick={sendEmail}   type="submit" value="Send"  className="p-text"  > {!loading ? 'Send Message' : 'Sended'}</button>
        
        </form>
       

       
   

       
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);