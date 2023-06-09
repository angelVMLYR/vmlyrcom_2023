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
      className='w-full'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-md sm:-[360px] w-[30%] h-[250px]"
      >
        kjkj
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A expedita maxime et laboriosam neque corporis totam sequi non quis voluptatum? Itaque culpa ea ex provident alias temporibus repellendus ad veritatis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius assumenda aliquid cupiditate dolore et fugiat quis itaque commodi rem error accusantium quibusdam, vero doloribus. In aliquid praesentium illo et.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod aut illum qui, voluptas maxime nobis vero inventore, veniam eligendi nesciunt vel reiciendis adipisci libero? Ut voluptate debitis voluptatum quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste, repellat aliquam voluptatibus quas voluptate atque sit maiores ipsum modi illum ea suscipit culpa inventore et. Enim optio odit natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit dignissimos nostrum deleniti delectus dolorum nisi molestiae sapiente architecto enim perspiciatis eum amet neque placeat debitis blanditiis minima, hic alias?

        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 w-full'>
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

export default SectionWrapper(Works, "")