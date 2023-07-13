import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles    } from '../styles';
import { SectionWrapper } from '../hoc'
import { github } from '../assets';
import { player } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import Modal from './Modal';
import { useState } from 'react';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  const [open, setOpen] = useState(false)
  return(
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='mt-12 mb-20'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-lg h-[350px] w-[330px]   sm:mt-[10px]"
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
                src={github} 
                alt="github"
                className='w-1/2 h-1/2 object-contain' 
              />
            </div>
            <Modal className='flex' open={open} onClose={() => setOpen(false)}>
              <section className='flex flex-col items-center'>
                <div className="w-full h-[100px] mt-4 relative">

                  <img className='rounded-lg' src={`./${image}`} alt="imageVideo" />

                  <div className='w-[40px] h-[40px] rounded-full bg-gradient-to-r from-green-400 
                    to-blue-500 absolute top-12 left-[120px] hover:from-pink-500 hover:to-yellow-500
                  '>
                    <img 
                      src=''
                      className='w-1/2 h-1/2 object-contain' 
                    />
                  </div>

                </div>
                
                <p className={`${styles.sectionSubText} mt-[60px]`}>Tech's</p>
                <div className='w-[80%] h-full flex justify-between relative mt-[10px]'>
                  {/* columna index */}
                  <div className='list-disc'>
                    <ul>
                      <li> - HTML</li>
                      <li> - CSS</li>
                      <li> - JavaScript</li>
                      <li> - PHP</li>
                    </ul>
                  </div>

                  {/* columna values */}
                  <div className=''>
                    <ul className='list-none'>
                      <li> - AWS</li>
                      <li> - Angular</li>
                      <li> - Bootstrap</li>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste, repellat aliquam voluptatibus quas voluptate atque sit maiores ipsum modi illum ea suscipit culpa inventore et. Enim optio odit natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit dignissimos nostrum deleniti delectus dolorum nisi molestiae sapiente architecto enim perspiciatis eum amet neque placeat debitis blanditiis minima, hic alias?

        </motion.p>
      </div>

      <div className='mt-20 mb-20 flex justify-center gap-10 h-[700px] w-full mb-20px overflow-x-scroll'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")