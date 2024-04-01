import { motion } from 'framer-motion';

export const AnimationTitle = ({ value }) => {
  const marqueeVariants = {
    animate: {
      x: ['100%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className='overflow-hidden whitespace-nowrap'>
      <motion.div
        className='inline-block text-[45px] text-white'
        variants={marqueeVariants}
        animate='animate'
      >
        <h1>
          <img src={value} alt='title' />
        </h1>
      </motion.div>
    </div>
  );
};
