import React, { useState ,useEffect} from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';


import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [name,setName] = useState([]);

   
 useEffect(() => {
  const query = '*[_type == "Self"]';

  client.fetch(query).then((data) => {
    setName(data);
  });
}, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      {name.map((name , index)=>(
          <h3 className='head-text' style={{color:"cyan"}}> 
           {name.sl}
                     </h3>
       ))}
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;