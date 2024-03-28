import { motion, AnimatePresence } from 'framer-motion';
import arrow from '../../shared/img/Frame.png';

export const AccordionItems = ({ title, text, description, flag, setFlag }) => {
  return (
    <div className='w-full mx-[auto] transition-all'>
      <div
        onClick={() => setFlag(title)}
        className={
          flag === title
            ? 'w-full border-solid border-[0.5px] border-[#6d6d6d] bg-neutral-900 text-[14px] pt-[8px] pb-[28px] mb-[17px] rounded-[30px] font-[600] transition-all cursor-pointer'
            : 'w-full border-solid border-[0.5px] border-[#6d6d6d] bg-neutral-900/[.30] text-[14px] pt-[8px] pb-[14px] mb-[17px] rounded-[30px] font-[600] transition-all cursor-pointer'
        }
      >
        <div
          className={
            flag === title
              ? 'w-[95%] flex justify-between items-center h-[44px] mb-[15px] transition-all text-[16px] mx-auto xl:text-[20px] lg:text-[18px]'
              : 'w-[95%] flex justify-between items-center h-[44px] transition-all text-[16px] mx-auto xl:text-[20px] lg:text-[18px]'
          }
        >
          {text}
          <img
            className={
              flag === title
                ? 'w-[20px] h-[20px] rotate-[-90deg] transition-all'
                : 'w-[20px] h-[20px] rotate-0 transition-all'
            }
            src={arrow}
            alt='arrow'
          />
        </div>
        <AnimatePresence>
          {flag === title && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              style={{ overflow: 'hidden' }}
              transition={{ duration: 0.2 }}
            >
              <div className='text-[#ffffff] w-[95%] mx-[auto]'>
                {description}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
