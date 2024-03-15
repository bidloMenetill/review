import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import arrow from '../../shared/img/Frame.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export const Questions = ({ text, description, flag, setFlag }) => {

    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => {
        if (isAsideOpen || !flag) {
            setIsAsideOpen(!isAsideOpen);
            setFlag(!flag);
        }
    };
    return (

        <div>
            {/* <div onClick={toggleAside} className={`contBefor ${isAsideOpen ? 'contAfter' : ''}`}>
                <div className={isAsideOpen ? 'subcontainerAfter' : 'subcontainerBefore'}><p className="">{text} </p><img className={isAsideOpen ? 'imgAfte' : 'imgBefore'} src={arrow} alt="" /></div>

                <p className={isAsideOpen ? 'textAfter' : 'textBefore'}>{description}</p>
            </div> */}

            <Accordion className="cont">
                <AccordionItem className="contBefor transition-all">
                    <AccordionItemHeading>
                        <AccordionItemButton className="!transition-all">
                            <div className="subcontainerBefore ease-in duration-300">
                                какие музыкальные жанры есть  в q-rush studio ?<img className={isAsideOpen ? 'imgAfte' : 'imgBefore'} src={arrow} alt="" />

                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="textAfter ease-in duration-300">
                            Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="contBefor ease-in duration-300">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="subcontainerBefore ease-in duration-300">
                                какие музыкальные жанры есть  в q-rush studio ?<img className={isAsideOpen ? 'imgAfte' : 'imgBefore'} src={arrow} alt="" />

                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="textAfter ease-in duration-300">
                            Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="contBefor ease-in duration-300">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="subcontainerBefore ease-in duration-300">
                                какие музыкальные жанры есть  в q-rush studio ?<img className={isAsideOpen ? 'imgAfte' : 'imgBefore'} src={arrow} alt="" />

                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="textAfter ease-in duration-300">
                            Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="contBefor ease-in duration-300">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="subcontainerBefore ease-in duration-300">
                                какие музыкальные жанры есть  в q-rush studio ?<img className={isAsideOpen ? 'imgAfte' : 'imgBefore'} src={arrow} alt="" />

                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="textAfter ease-in duration-300">
                            Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>


    );
}

