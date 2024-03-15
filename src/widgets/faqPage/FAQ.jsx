import { useState } from 'react';
import { Questions } from '../../features';


export const FAQ = () => {
    const [flag, setFlag] = useState();

    return (
        <section className="text-[#FFFFFF] mt-[100px]">
            <div className="w-[1720px] h-[650px] mx-[auto] mb-[230px]">
                <h1 className="text-[50px] text-center pb-[90px]">Часто задаваемые вопросы</h1>
                <Questions text={'какие музыкальные жанры есть  в q-rush studio ?'} description={'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '} flag={flag} setFlag={setFlag} />
                {/* <Questions text={'какие музыкальные жанры есть  в q-rush studio ?'} description={'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '} flag={flag} setFlag={setFlag} />
                <Questions text={'какие музыкальные жанры есть  в q-rush studio ?'} description={'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '} flag={flag} setFlag={setFlag} />
                <Questions text={'какие музыкальные жанры есть  в q-rush studio ?'} description={'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '} flag={flag} setFlag={setFlag} />
                <Questions text={'какие музыкальные жанры есть  в q-rush studio ?'} description={'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '} flag={flag} setFlag={setFlag} />
                <Questions text={'какие музыкальные жанры есть  в q-rush studio ?'} description={'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '} flag={flag} setFlag={setFlag} /> */}
            </div>
        </section>
    );
};
