import { FiMapPin } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import avatar3d from "../../assets/images/3d.png";
import "./style.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__menu__dot"></div>
        <div className="header__menu__dot"></div>
        <div className="header__menu__dot"></div>
        <div className="header__menu__dot__red"></div>
      </div>
      <div className="header__address">
        <FiMapPin size={15} fontWeight={700} color={"#d18285"} />
        <p className="header__address__text">California, US</p>
        <MdOutlineKeyboardArrowDown color={"#eed49d"} />
      </div>
      <div className="header__avatar">
        <img src={avatar3d} alt="" className="header__avatar__img" />
      </div>
    </div>
  );
};

export default Header;
