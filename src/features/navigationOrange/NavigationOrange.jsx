import { useState } from 'react';
import { motion } from 'framer-motion';
import navOrange from '../../shared/img/nav_orange.svg';
import telegramOrange from '../../shared/img/telegram_nav.svg';
import whatsappOrange from '../../shared/img/whatsapp_nav.svg';
import instagramOrange from '../../shared/img/instagram_nav.svg';


export const NavigationOrange = () => {
  const [ isAsideOpen, setIsAsideOpen ] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <>
      <aside className='asideContainer'>
        <ul className={isAsideOpen ? 'ulContainerOpen' : 'ulContainer'}>
          <li className='liNavOrange'><a href="https://wa.me/ваш номер" className='aNavOrange' target="_blank" rel="noreferrer"> <img src={telegramOrange} alt="" /> </a></li>
          <li className='liNavOrange'><a href="https://t.me/ваш id" className='aNavOrange' target="_blank" rel="noreferrer"><img src={whatsappOrange} alt="" /></a></li>
          <li className='liNavOrange'><a href="https://t.me/ваш id" className='aNavOrange' target="_blank" rel="noreferrer"><img src={instagramOrange} alt="" /></a></li>
        </ul>
        <motion.button
          className="flex border-[#F93822] p-[10px]  border-solid border-[5px] justify-center items-center rounded-[766.667px] bg-[#F93822]"
          onClick={toggleAside}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: isAsideOpen ? 90 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={navOrange}
            alt="Aside Button"
            animate={{ opacity: isAsideOpen ? 0.5 : 1 }}
            transition={{ yoyo: Infinity, duration: 1 }}
          />
        </motion.button>
      </aside>
    </>
  );
};
