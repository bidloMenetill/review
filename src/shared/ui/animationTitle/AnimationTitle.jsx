import { motion } from 'framer-motion';

export const AnimationTitle = ({ value }) => {
  const marqueeVariants = {
    animate: {
      x: ['100%', '-220%'],
      transition: {
        x: {
          repeat: Infinity,
          duration: 10,
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
        <h1 className='flex gap-x-[50px] mg:gap-x-[100px]'>
          <img src={value} alt='title1' />
          <img src={value} alt='title2' />
          <img src={value} alt='title3' />
          <img src={value} alt='title4' />
        </h1>
      </motion.div>
    </div>
  );
};
