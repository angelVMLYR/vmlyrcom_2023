import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles    } from '../styles';
import { SectionWrapper } from '../hoc'
import { info } from '../assets';
import { player } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import Modal from './Modal';
import { useState } from 'react';

const ProjectCard = ({index, name, description, tags, image, source_code_link, stack}) => {
  const [open, setOpen] = useState(false)
  return(
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='mt-12 mb-20 ml-4'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-lg h-[350px] w-[330px] sm:mt-[10px]"
      >
        <div className='relative w-full h-full'>
          <img 
            src={image} 
            alt={name}
            className='w-full h-full object-cover rounded-lg' 
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => setOpen(true)}
              className='bg-gradient-to-r from-green-400 to-blue-500 mr-2 hover:from-pink-500 hover:to-yellow-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={info} 
                alt="github"
                className='w-[26px] h-[26px] object-contain' 
              />
            </div>
            <Modal className='flex' open={open} onClose={() => setOpen(false)}>


              <section className='flex flex-col items-center'>
                
                
                <p className={`${styles.sectionSubText} mt-[60px]`}>Tech's</p>
                <div className='w-[80%] h-full flex justify-center relative mt-[10px]'>
                  {/* columna index */}
                  <div className='list-disc'>
                    <ul>
                      {stack.map( (tech, index) => (
                        <li key={index}>
                          - <strong>{tech.name}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>

                  
                </div>
              </section>
              
            </Modal>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='mb-3 font-semibold'>{name}</h3>
          <p>{description}</p>
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return(
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div> 

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
        >
          In this section, we are delighted to present a selection of standout projects undertaken by VMLYRCommerce for some of the most renowned brands in the market. As a leading company in the industry, we have worked diligently to develop innovative strategies and creative solutions that have propelled our clients to success. Through a combination of data analysis, creativity, and cutting-edge technology, we have created outstanding projects that have made a significant impact in the market.

        </motion.p>
      </div>

      <div className='flex justify-center w-full'>

        <div className='overflow-auto flex  h-[800px]'>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")