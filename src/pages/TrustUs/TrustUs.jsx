import { TrustUsMain, Preview, Musicians} from '../../widgets';
import {Reserve} from '../../shared';

export const TrustUs = () => {
  return (
    <div>
      <TrustUsMain />
      <Preview />
      <Musicians />
      <Reserve 
        h3 = "Попрощайтесь С Плохим Звуком Навсегда"
        p = "Теперь артисты и музыканты могут звучать профессионально на своей первой сессии."
      />
    </div>
  );
};
