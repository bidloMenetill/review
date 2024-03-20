import { useMediaQuery } from '../../shared';
import { FAQ, Form } from '../../widgets';

export const Faq = () => {
  const isWideScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1480px)'
  );
  const isMobileScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px)'
  );
  const isIphoneScreen = useMediaQuery(
    '(min-width: 430px) and (max-width: 768px)'
  );
  return (
    <section
      className={`${isWideScreen ? 'max-w-[1480px]' : isMobileScreen ? 'max-w-[1024px]' : isIphoneScreen ? 'max-w-[768px]' : ''} mx-[auto] -mt-[0px] pt-[120px] h-[1679px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#190604] via-[#190604] to-[#000000] font-montserrat`}
    >
      <FAQ />
      <Form />
    </section>
  );
};
