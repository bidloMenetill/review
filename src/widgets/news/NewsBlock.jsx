import { useTranslation } from 'react-i18next';
import Rectangle from '../../shared/img/news/rectangle_108.png';
import Rectangle2 from '../../shared/img/news/rectangle_110.png';
import Rectangle3 from '../../shared/img/news/rectangle_110_1.png';
import { useMediaQuery } from '../../shared';

export const NewsBlock = () => {
  const { t } = useTranslation();
  const isWideScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1920px)'
  );
  return (
    // <div className='newsWrapper'>
    <div>
      <div className={isWideScreen ? 'newsWrapper' : 'newsWrapper2'}>
        <div className='newsBlock'>
          <div>
            <h2 className={isWideScreen ? 'newsH2' : 'newsH2_2'}>
              {t('newsBlock.firstSection.title')}
            </h2>
            <p className={isWideScreen ? 'newsP' : 'newsP_2'}>
              {t('newsBlock.firstSection.upperTitle')}
            </p>
          </div>
          <div className='newsBlocks'>
            <div className={isWideScreen ? 'newsSection1' : 'newsSectionMedia'}>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    В студии звукозаписи прошел мастер-класс от известного
                    звукорежиссера. Участники получили ценные знания о
                    звукозаписи и сведении треков от профессионала.
                  </p>
                </div>
              </div>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle2} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    Легендарная студия звукозаписи объявила о планах открытия
                    филиала за рубежом. Теперь музыканты со всего мира смогут
                    воспользоваться услугами известной студии для записи своих
                    произведений.
                  </p>
                </div>
              </div>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle3} alt='newsPhoto2' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    Студия звукозаписи запустила проект по поддержке молодых
                    талантов, предоставляя им возможность бесплатной аренды
                    студии для записи своей музыки. Это отличная возможность для
                    начинающих музыкантов проявить себя.
                  </p>
                </div>
              </div>
            </div>
            <div className='newsSection1'>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle2} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    Легендарная студия звукозаписи объявила о планах открытия
                    филиала за рубежом. Теперь музыканты со всего мира смогут
                    воспользоваться услугами известной студии для записи своих
                    произведений.
                  </p>
                </div>
              </div>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle3} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    Студия звукозаписи запустила проект по поддержке молодых
                    талантов, предоставляя им возможность бесплатной аренды
                    студии для записи своей музыки. Это отличная возможность для
                    начинающих музыкантов проявить себя.
                  </p>
                </div>
              </div>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    В студии звукозаписи прошел мастер-класс от известного
                    звукорежиссера. Участники получили ценные знания о
                    звукозаписи и сведении треков от профессионала.
                  </p>
                </div>
              </div>
            </div>
            <div className='newsSection1'>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle3} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    Студия звукозаписи запустила проект по поддержке молодых
                    талантов, предоставляя им возможность бесплатной аренды
                    студии для записи своей музыки. Это отличная возможность для
                    начинающих музыкантов проявить себя.
                  </p>
                </div>
              </div>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    В студии звукозаписи прошел мастер-класс от известного
                    звукорежиссера. Участники получили ценные знания о
                    звукозаписи и сведении треков от профессионала.
                  </p>
                </div>
              </div>
              <div className='newsSection2'>
                <div className='newsSections'>
                  <img src={Rectangle2} alt='newsPhoto' />
                  <p
                    className={
                      isWideScreen ? 'newsP news_p' : 'newsP_2 news_p_2'
                    }
                  >
                    Легендарная студия звукозаписи объявила о планах открытия
                    филиала за рубежом. Теперь музыканты со всего мира смогут
                    воспользоваться услугами известной студии для записи своих
                    произведений.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
