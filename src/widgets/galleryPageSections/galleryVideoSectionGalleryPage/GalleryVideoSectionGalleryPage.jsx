export const GalleryVideoSectionGalleryPage = () => {
  return (
    <section className='bg-center max-w-full'>
      <div className='max-w-full flex justify-center  mb-[-40px] p-[5%]'>
        <iframe
          className='rounded-[30px] border-[2px] border-solid border-gray-500 xl:w-[1430px] xl:h-[700px] lg:w-[1430px] lg:h-[700px]  tablet:w-[956px] tablet:h-[818px] md:w-[673px] md:h-[534px]  w-[480px] sm:w-[580px] h-[280px] sm:h-[380px]'
          loading='lazy'
          src='https://www.youtube.com/embed/JHIAYrd4zoA?si=JPPlcYuZKmXntKIA'
          title='YouTube video player'
          // frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          // allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
