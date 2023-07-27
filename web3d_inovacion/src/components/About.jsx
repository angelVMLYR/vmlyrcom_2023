import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0,75)}
        className='w-full bg-gradient-to-r from-lime-500 to-teal-500 p-[1px] rounded-[20px] 
        shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-[#00205e] rounded-[20px] py-5 min-h-[280px]
          flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return(
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div> 

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='my-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
      >
        VMLYRCommerce is a leading company specializing in providing services to major brands to enhance their online presence. With a focus on data analysis and business intelligence, VMLYRCommerce develops tailored strategies ranging from advertising campaigns to cutting-edge technological solutions. Through a comprehensive approach, the company strives to deliver robust and effective solutions that enable its clients to achieve their business objectives successfully and sustainably.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
