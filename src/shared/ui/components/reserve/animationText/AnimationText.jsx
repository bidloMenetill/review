import { motion } from 'framer-motion';
const AnimationText = () => {
  const marqueeVariants = {
    animate: {
      x: [0, window.innerWidth], // Двигаем текст от 0 до полной ширины экрана
      transition: {
        x: {
          repeat: Infinity, // Бесконечное повторение
          duration: 8, // Продолжительность анимации в секундах
          ease: 'linear', // Линейное изменение скорости анимации
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
        Q-rush project
      </motion.div>
    </div>
  );
};

export default AnimationText;
