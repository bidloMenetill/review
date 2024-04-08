import { Link } from 'react-router-dom';
import { Button, scrollToTop } from '../../../shared';
import { CardSectionGroupMobile } from '../../../shared/ui/cardSectionGroupMobile/CardSectionGroupMobile';

export const SectionGroupMobile = props => {
  const {
    firstDescription,
    secondDescription,
    thirdDescription,
    title,
    firstSubTitle,
    secondSubTitle,
    thirdSubTitle,
    thirdImg,
    firstImg,
    secondImg,
    background,
  } = props;

  const dataArr = [
    {
      title: firstSubTitle,
      description: firstDescription,
      img: firstImg,
    },
    {
      title: secondSubTitle,
      description: secondDescription,
      img: secondImg,
    },
    { title: thirdSubTitle, description: thirdDescription, img: thirdImg },
  ];

  return (
    <section
      className='h-[736px] bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className='mx-auto px-4'>
        <h2 className='text-[#E2DED3] text-center pt-[24px] pb-[17px] font-[Montserrat] text-[30px] font-bold leading-[normal]'>
          {title}
        </h2>
        <ul className='flex flex-col gap-y-[10px]'>
          {dataArr?.map((item, index) => (
            <CardSectionGroupMobile item={item} key={index} />
          ))}
        </ul>{' '}
        <Link
          to='services'
          className='flex justify-center mt-[25px]'
          onClick={scrollToTop}
        >
          <Button variant='moreInfoButton'>Подробнее</Button>
        </Link>
      </section>
    </section>
  );
};
