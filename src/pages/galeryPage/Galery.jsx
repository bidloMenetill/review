import { Reserve } from '../../shared';
import { GaleryMain } from '../../widgets';

export const Galery = () => {
  return (
    <>
      <section className="bg-[url('/src/shared/img/galery.jpg')] bg-cover bg-no-repeat bg-center">
        <GaleryMain />
        <Reserve />
      </section>
    </>
  );
};
