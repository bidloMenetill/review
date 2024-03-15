import darkFon from '../../shared/img/shop/darkFon.png';
import guitar from '../../shared/img/shop/guitar.png';
import { BuyButton } from '../../shared';

export const ShopCards = () => {
  const shopCard = [
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
  ];
  return (
    <ul className='container flex flex-wrap text-[#f5f5f5] gap-x-[20px]'>
      {shopCard.map((card, index) => (
        <li
          className='w-[415px] h-[298px] text-center bg-[#000] rounded-[30px] border-[1px] border-white mt-[100px]'
          key={index}
        >
          <div className='text-[20px] font-medium mt-[30px]'>
            {card.instrumentName}
          </div>
          <div className='w-[413px] h-[196px] flex justify-center items-center justify-around  mt-[19px]'>
            <div className='flex flex-col items-center'>
              <p className=' w-[214px] h-[30px] text-[25px] font-medium '>
                {card.model}
              </p>
              <price className='text-[20px] font-medium text-[#ACACAC] mt-[10px]'>
                {card.price}
              </price>
              <BuyButton />
            </div>
            <img
              className='w-[124px] h-[195px]'
              src={card.instrument}
              alt='instrument'
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
