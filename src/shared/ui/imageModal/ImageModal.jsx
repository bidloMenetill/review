import { useState, useEffect } from 'react';

export const ImageModal = ({ imageUrl, handleCloseModal }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    handleCloseModal(); // Закрываем модальное окно и вызываем функцию, переданную из родительского компонента
  };

  return (
    <>
      {showModal && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
        >
          <div className='max-w-[80%] h-[50%]'>
            <img
              src={imageUrl}
              alt='Modal'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      )}
    </>
  );
};
