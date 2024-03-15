import trustPreviewBg from '../../shared/img/TrustUs/trustPreviewBg.svg';
import chat from '../../shared/img/TrustUs/chat.svg';

export const Preview = () => {
  return (
    <div
      className='bg-cover bg-no-repeat bg-center h-[2812px] '
      style={{ backgroundImage: `url(${trustPreviewBg})` }}
    >
      <div className='w-[1720px] mx-auto flex justify-end'>
        <a className='w-[96px] h-[238px]' href='#'>
          <img src={chat} alt='chat' />
        </a>
      </div>
    </div>
  );
};
