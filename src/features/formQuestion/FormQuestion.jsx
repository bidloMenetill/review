
export const FormQuestion = () => {

    return (
        <div className="w-[1720px] h-[425px] mx-[auto] mb-[292px]">
            <h1 className="text-[50px] text-center pb-[90px]">Задайте свой вопрос</h1>

            <div className="flex justify-between max-w-[1300px] mx-[auto] gap-[20px]">
                <div className="w-[50%]">
                    <div><input className="w-[100%] mb-[27px] py-[18px] pl-[30px] rounded-[30px] outline-none bg-[#F93822] placeholder:text-[#FFFFFF]" type="text" name="name" placeholder="Имя" /></div>

                    <div><input className="w-[100%] mb-[61px] py-[18px] pl-[30px] rounded-[30px] outline-none bg-[#F93822] placeholder:text-[#FFFFFF]" type="text" placeholder="Номер whatsapp" /></div>

                    <div className="flex gap-[27px] items-center">
                        <div>
                            <div className="w-full flex gap-2">
                                <input name="check" className="peer relative appearance-none shrink-0 w-[20px] h-[20px] border-solid border-[3px] rounded-[3px] border-[#F93822] bg-[#fff] cheked:border-[#F93822] " type="checkbox" />

                                <svg className="absolute w-4 h-4 mt-[1.5px] ml-[1.5px] pointer-events-none hidden peer-checked:block stroke-[#F93822] outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>

                        </div>
                        <div><p>Я согласен(-на) с условиями Политики <br /> Конфиденциальности </p></div>
                    </div>

                </div>
                <div className="w-[50%]">
                    <div><input className="w-[100%] mb-[47px] pt-[10px] pb-[114px] pl-[30px] rounded-[30px] outline-none bg-[#F93822] placeholder:text-[#FFFFFF]" type="text" placeholder="Текст" /></div>

                    <div className="text-right"><button type="submit" className="bg-[#F93822] rounded-[30px] py-[20px] px-[100px]">Отправить</button> </div>
                </div>
            </div>
        </div>
    );
}

