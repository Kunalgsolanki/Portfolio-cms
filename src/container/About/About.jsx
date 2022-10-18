import React, { useState, useEffect } from 'react'
import "./About.scss"
import { motion } from 'framer-motion';

const abouts = [
  {
    title: 'webdevloper',
    description: " I am good webdevloper",
    imgUrl: 'http://www.smart-webtech.com/wp-content/uploads/2014/08/web-development.png'

  },
  {
    title: 'App developer',
    description: " I am good App developer",
    imgUrl: 'https://www.elixirinfo.com/assets/images/mobile-app-development.png'

  },
  {
    title: 'Blockchain developer',
    description: " I am good  Blockchain developer",
    imgUrl: 'https://blog.logrocket.com/wp-content/uploads/2021/10/top-blockchain-development-frameworks.png'

  },

  {
    title: ' Ai developer',
    description: " I am good  Ai developer",
    imgUrl: 'https://i.pinimg.com/736x/98/6d/55/986d55bbeb8c916e084f8d082d16864c.jpg'

  }


];
const About = () => {


  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles"

    
      >

{abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default About