import { useState } from 'react';
import { motion } from 'framer-motion';
import navOrange from '../../shared/img/nav_orange.svg';
import telegramOrange from '../../shared/img/telegram_nav.svg';
import whatsappOrange from '../../shared/img/whatsapp_nav.svg';
import instagramOrange from '../../shared/img/instagram_nav.svg';

export const NavigationOrange = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <aside className='fixed bottom-[7vh] xl:bottom-[7vh] right-7 xl:right-[125px] bg-[#FE0002]   cursor-pointer z-50  rounded-[766.667px]'>
        <ul className={isAsideOpen ? 'block' : 'hidden'}>
          <li className='mb-[10px] mt-[7px]'>
            <a
              href='https://wa.me/ваш номер'
              className='flex justify-center items-center p-[10px]'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <img src={telegramOrange} alt='' />{' '}
            </a>
          </li>
          <li className='mb-[10px] mt-[7px]'>
            <a
              href='https://t.me/ваш id'
              className='flex justify-center items-center p-[10px]'
              target='_blank'
              rel='noreferrer'
            >
              <img src={whatsappOrange} alt='' />
            </a>
          </li>
          <li className='mb-[10px] mt-[7px]'>
            <a
              href='https://t.me/ваш id'
              className='flex justify-center items-center p-[10px]'
              target='_blank'
              rel='noreferrer'
            >
              <img src={instagramOrange} alt='' />
            </a>
          </li>
        </ul>
        <motion.button
          className='flex border-[#FE0002] p-[10px]  border-solid border-[5px] justify-center items-center rounded-[766.667px] bg-[#FE0002]'
          onClick={() => setIsAsideOpen(!isAsideOpen)}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: isAsideOpen ? 90 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={navOrange}
            alt='Aside Button'
            animate={{ opacity: isAsideOpen ? 0.5 : 1 }}
            transition={{ yoyo: Infinity, duration: 1 }}
          />
        </motion.button>
      </aside>
    </>
  );
};
