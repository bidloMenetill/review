import { Link } from "react-router-dom";
import logo from "../shared/img/rush.png";
import Button from "../shared/ui/button/Button";

function Header() {
  return (
    <header className="bg-gray-700 w-[100vw] h-[100px] bg-opacity-50 flex justify-center">
      <nav className=" w-[1720px]  flex justify-between items-center">
        <img src={logo} alt="Q-RUSH logo" />

        <ul className=" flex justify-evenly items-center  text-gray-100 gap-[25px] font-montserrat font-[50px] text-[20px] leading-normal ">
          <li>
            <a href="">О нас</a>
          </li>
          <li>
            <a href="">Услуги</a>
          </li>
          <li>
            <Link to={"/trustus"}>Нам доверяют</Link>
          </li>
          <li>
            <a href="">Галерея</a>
          </li>
          <li>
            <a href="">Контакты</a>
          </li>
        </ul>

        <div className="flex items-center justify-aroundfont-montserrat text-[23px] leading-normal">
          <div className="flex gap-[16px] mr-[50px]  text-gray-500 ">
            <button className=" focus:text-gray-100 hover:text-orange-500">
              RU
            </button>
            <button className=" focus:text-gray-100 hover:text-orange-500">
              EN
            </button>
            <button className=" focus:text-gray-100 hover:text-orange-500">
              KG
            </button>
          </div>
          <Button txt="связаться" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
