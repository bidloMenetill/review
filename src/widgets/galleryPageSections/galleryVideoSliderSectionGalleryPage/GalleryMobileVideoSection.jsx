export const GalleryMobileVideoSection = () => {
  const VideoSlides = [
    'https://www.youtube.com/embed/8t0vNu2fCCM',
    'https://www.youtube.com/embed/8t0vNu2fCCM',
    'https://www.youtube.com/embed/8t0vNu2fCCM',
    'https://www.youtube.com/embed/8t0vNu2fCCM',
    'https://www.youtube.com/embed/8t0vNu2fCCM',
    'https://www.youtube.com/embed/8t0vNu2fCCM',
  ];
  return (
    <section className='bg-center max-w-full mt-[50px] mb-[50px]'>
      <div className='container grid grid-cols-2 gap-4 items-center mx-auto p-[16px] sm:p-[0px] '>
        {VideoSlides.map((link, index) => (
          <iframe
            key={index}
            className='rounded-[30px] flex items-center justify-center border-[2px] border-solid border-gray-500  md:w-[100%] sm:w-[100%] w-[100%] h-[180px] '
            src={link}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            // allowfullscreen
          ></iframe>
        ))}
      </div>
    </section>
  );
};
