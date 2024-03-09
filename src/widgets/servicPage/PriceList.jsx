import { useTranslation } from "react-i18next";
import { OrangeButton } from "../../shared";
export const PriceList = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[870px] w-[1720px] h-[283px] mx-auto text-[#f5f5f5]">
      <h1 className="text-[#DC6441] text-[25px] font-[500] pb-[27px]">
        {t("servicePage.secondSection.title")}
      </h1>

      <table class="table-auto w-[100%]">
        <thead>
          <tr className="bg-[#DC6441] border-solid border-2 border-[#F5F5F5] text-[25px] text-[#F5F5F5]">
            <th className="border-solid border-2 w-[50%] py-[15px]">
              {t("servicePage.secondSection.firsTableH")}
            </th>
            <th className="text-[#161616]">
              {t("servicePage.secondSection.secondTableH")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#161616] border-solid border-2 border-[#F5F5F5]">
            <th className="border-solid border-2 w-[50%] py-[15px]">
              {t("servicePage.secondSection.firstColumn.firsLine")}
            </th>
            <th>{t("servicePage.secondSection.secondColumn.firsLine")}</th>
          </tr>
          <tr className="bg-[#161616] border-solid border-2 border-[#F5F5F5]">
            <th className="border-solid border-2 w-[50%] py-[15px]">
              {t("servicePage.secondSection.firstColumn.secondLine")}
            </th>
            <th>{t("servicePage.secondSection.secondColumn.secondLine")}</th>
          </tr>
          <tr className="bg-[#161616] border-solid border-2 border-[#F5F5F5]">
            <th className="border-solid border-2 w-[50%] py-[15px]">
              {t("servicePage.secondSection.firstColumn.thirtLine")}
            </th>
            <th>{t("servicePage.secondSection.secondColumn.thirtLine")}</th>
          </tr>
          <tr className="bg-[#161616] border-solid border-2 border-[#F5F5F5]">
            <th className="border-solid border-2 w-[50%] py-[15px]">
              {t("servicePage.secondSection.firstColumn.forthLine")}
            </th>
            <th>{t("servicePage.secondSection.secondColumn.forthLine")}</th>
          </tr>
          <tr className="bg-[#161616] border-solid border-2 border-[#F5F5F5]">
            <th className="border-solid border-2 w-[50%] py-[15px]">
              {t("servicePage.secondSection.firstColumn.fivthLine")}
            </th>
            <th>{t("servicePage.secondSection.secondColumn.fivthLine")}</th>
          </tr>
        </tbody>
      </table>
      <div className="text-right mt-[46px]">
        <OrangeButton txt={t("servicePage.secondSection.button")} />
      </div>
    </section>
  );
};
