import React , {useEffect , useState} from 'react'
import "./testMonomials.scss"
import { client, urlFor } from "../../client"
import { motion } from "framer-motion"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap , MotionWrap} from "../../Wrapper"
 
const TestMonomials = () => {
 const [Test , setTest] = useState([]);
 const [brands , setBrands] = useState([]);
 const [currentIndex , setCurrentIndex] = useState(0);


 const handleClick=(index)=>{

  setCurrentIndex(index);

  



 };
  useEffect(()=>{
   
     const query =  '*[_type == "testimonials"]' ;
     const BrandsQuery =  '*[_type == "brands"]' ;

     
      client.fetch(query).then(( data)=>{

     setTest(data);
      })
     

      client.fetch(BrandsQuery ).then(( data)=>{

        setBrands(data);
         })


  },[])




  return (
    <>
    {Test.length && (
      <>
        <div className="app__testimonial-item app__flex">
          <img src={urlFor(Test[currentIndex].imgurl)} alt={Test[currentIndex].name} />
          <div className="app__testimonial-content">
            <p className="p-text">{Test[currentIndex].feedback}</p>
            <div>
              <h4 className="bold-text">{Test[currentIndex].name}</h4>
              <h5 className="p-text">{Test[currentIndex].company}</h5>
            </div>
          </div>
        </div>

        <div className="app__testimonial-btns app__flex">
          <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? Test.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>

          <div className="app__flex" onClick={() => handleClick(currentIndex === Test.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>
      </>
    )}

    <div className="app__testimonial-brands app__flex">
      {brands.map((brand) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: 'tween' }}
          key={brand._id}
        >
          <img src={urlFor(brand.imgUrl)} alt={brand.name} />
        </motion.div>
      ))}
    </div>
  </>
  )
}


export default AppWrap(
  MotionWrap(TestMonomials, 'app__testimonial'),
  'testMonomials',
  'app__primary',
);