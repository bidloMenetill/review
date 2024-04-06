export const ThirdVideoSection = () => {
  return (
    <section>
      <section className='container'>
        <div className='flex justify-center items-center mt-[156px] '>
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
    </section>
  );
};
