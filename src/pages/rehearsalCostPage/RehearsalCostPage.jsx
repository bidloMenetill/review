import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  RehearsalCostFirstSection,
  RehearsalCostSecondSection,
  RehearsalCostThirdSection,
  RehearsalSwiperSection,
} from '../../widgets';
import { Advertising } from '../../shared';

export const RehearsalCostPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <RehearsalSwiperSection />
      <RehearsalCostFirstSection />
      <RehearsalCostSecondSection />
      <RehearsalCostThirdSection />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </>
  );
};
