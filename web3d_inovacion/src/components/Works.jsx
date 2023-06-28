import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles    } from '../styles';
import { SectionWrapper } from '../hoc'
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-1/8 mt-10 mb-20'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-lg lg:w-[700px] lg:h-[500px] sm:w-[300px] sm:h-[200px]"
      >
        <div className='relative w-full h-full'>
          <img 
            src={image} 
            alt={name}
            className='w-full h-full object-cover rounded-lg' 
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github} 
                alt="github"
                className='w-1/2 h-1/2 object-contain' 
              />
            </div>
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

      <div className='mt-20 mb-4 flex flex-wrap gap-7'>
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