import { motion, AnimatePresence } from 'framer-motion';
import arrow from '../../shared/img/Frame.png';

export const Questions = ({ title, text, description, flag, setFlag }) => {
  return (
    <div className='cont'>
      <div
        onClick={() => setFlag(title)}
        className={flag === title ? 'contAfter' : 'contBefor'}
      >
        <div
          className={
            flag === title ? 'subcontainerAfter' : 'subcontainerBefore'
          }
        >
          {text}
          <img
            className={flag === title ? 'imgAfte' : 'imgBefore'}
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
              <div className='textAfter'>{description}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
