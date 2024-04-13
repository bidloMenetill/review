export const GalleryVideoSectionGalleryPage = () => {
  return (
    <section className='bg-center max-w-full'>
      <div className='max-w-full flex justify-center  mb-[-40px] p-[5%]'>
        <iframe
          className='rounded-[30px] border-[2px] border-solid border-gray-500 '
          width='1430'
          height='700'
          src='https://www.youtube.com/embed/JHIAYrd4zoA?si=JPPlcYuZKmXntKIA'
          title='YouTube video player'
          // frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          // allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
