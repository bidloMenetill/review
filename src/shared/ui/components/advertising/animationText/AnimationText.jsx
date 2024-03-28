import { motion } from 'framer-motion';
export const AnimationText = ({ qrushImg }) => {
  const marqueeVariants = {
    animate: {
      x: [window.innerWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 8,
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
        <img src={qrushImg} alt='qrushImg' />
      </motion.div>
    </div>
  );
};
