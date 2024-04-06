import { Button, CardSectionGroup } from '../../shared';
import ViewAllLink from '../../shared/ui/viewAllLink/ViewAllLink';

export const SectionGroup = props => {
  const {
    firstDescription,
    secondDescription,
    thirdDescription,
    title,
    firstSubTitle,
    secondSubTitle,
    thirdSubTitle,
    linkAddress,
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
      className='h-[700px] xl:h-[1174px] lg:h-[900px] bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className='mx-auto max-w-[90%] xl:container'>
        <h2 className='text-[#F5F5F5] font-[Montserrat] text-[80px] lg:text-[100px] not-italic font-medium pt-[60px] xl:pt-[100px] leading-[normal]'>
          {title}
        </h2>
        <div className='flex justify-end'>
          <ViewAllLink linkAddress={linkAddress} />
        </div>
        <ul className='flex gap-x-[20px] mt-[30px] xl:mt-[63px] lg:mt-[43px] mb-[90px]'>
          {dataArr?.map((item, index) => (
            <CardSectionGroup item={item} key={index} />
          ))}
        </ul>
      </section>
    </section>
  );
};
