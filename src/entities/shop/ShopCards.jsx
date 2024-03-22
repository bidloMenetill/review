import darkFon from '../../shared/img/shop/darkFon.png';
import guitar from '../../shared/img/shop/guitar.png';
import { BuyButton, useMediaQuery } from '../../shared';

export const ShopCards = () => {
  const shopCard = [
    {
      id: 1,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 2,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 3,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 4,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 5,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 6,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 7,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 8,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 9,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 10,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 11,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 12,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 13,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 14,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 15,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
    {
      id: 16,
      background: darkFon,
      instrumentName: 'Электроакустическая гитара',
      model: 'Crafter HT-100CE',
      price: '23000сом',
      instrument: guitar,
    },
  ];

  const isWideScreen1 = useMediaQuery(
    '(min-width: 1620px) and (max-width:1820px)'
  );
  const isWideScreen2 = useMediaQuery(
    '(min-width: 1320px) and (max-width:1620px)'
  );
  const isWideScreen3 = useMediaQuery(
    '(min-width: 1024px) and (max-width:1320px)'
  );

  return (
    <ul
      className={`container flex flex-wrap text-[#f5f5f5] gap-x-[20px] ${isWideScreen1 ? 'w-[1520px]' : isWideScreen2 ? 'w-[1220px]' : isWideScreen3 ? 'w-[920px]' : ''}`}
    >
      {shopCard.map((card, index) => (
        <li
          className={`text-center bg-[#000] border-[1px] border-white mt-[100px] ${isWideScreen1 ? 'w-[365px] h-[298px] rounded-[30px]' : isWideScreen2 ? 'w-[290px] h-[298px] rounded-[20px]' : isWideScreen3 ? 'w-[290px] h-[288px] rounded-[10px]' : 'w-[415px] h-[298px] rounded-[30px]'}`}
          key={card.id}
        >
          <div className='text-[20px] font-medium mt-[30px]'>
            {card.instrumentName}
          </div>
          <div
            className={`h-[196px] flex justify-center items-center justify-around ${isWideScreen1 ? 'w-[323px] mt-[19px]' : isWideScreen2 ? 'w-[243px] mt-[10px]' : isWideScreen3 ? 'w-[243px] ' : 'w-[413px] mt-[19px]'}`}
          >
            <div className='flex flex-col items-center'>
              <p
                className={`h-[30px]  font-medium ${isWideScreen1 ? 'w-[200px] text-[25px]' : isWideScreen2 ? 'w-[180px] text-[23px]' : isWideScreen3 ? 'w-[160px] text-[21px]' : 'w-[214px] text-[25px]'}`}
              >
                {card.model}
              </p>
              <p
                className={`text-[20px] font-medium text-[#ACACAC] mt-[10px] ${isWideScreen1 ? 'mt-[50px]' : isWideScreen2 ? 'mt-[40px]' : isWideScreen3 ? 'mt-[30px]' : 'mt-[10px]'}`}
              >
                {card.price}
              </p>
              <BuyButton />
            </div>
            <img
              className={`${isWideScreen1 ? 'w-[114px] h-[175px]' : isWideScreen2 ? 'w-[104px] h-[155px]' : isWideScreen3 ? 'w-[84px] h-[135px]' : 'w-[124px] h-[195px]'}`}
              src={card.instrument}
              alt='instrument'
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
