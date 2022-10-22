import React ,{useState, useEffect}from 'react';
import { BsGithub, BsInstagram ,BsTwitter, BsLinkedin} from 'react-icons/bs'
import { FaFacebookF} from 'react-icons/fa'
import {  client } from '../client';

const SocialMedia = () => {

   const [link, setLink] = useState([]);
   useEffect(() => {
      
    const query = '*[_type == "Self"]';

    client.fetch(query).then((data) => {
      setLink(data);
    });
   }, []);
  
  return (
    <div className='app__social'>
         <div>

          {link.map((link, index)=>(

    <a href={link.GLink} key={link+index}>  <BsGithub />  </a> 
          ))}
             
         </div>
         <div>
         {link.map((link, index)=>(

<a href={link.LLink} key={link+index}>    <BsLinkedin/></a> 
      ))}
            
         </div>
         <div>
         {link.map((link, index)=>(

<a href={link.ILink} key={link+index}>    <BsInstagram/></a> 
      ))}
         </div>
         <div>

         {link.map((link, index)=>(

<a href={link.FLink} key={link+index}>    < FaFacebookF/></a> 
      ))}
         </div>

         <div>

         {link.map((link, index)=>(

<a href={link.TLink} key={link+index}>    < BsTwitter/></a> 
      ))}
         </div>
    </div>
  )
}

export default SocialMedia
