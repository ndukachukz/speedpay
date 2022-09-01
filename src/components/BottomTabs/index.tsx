import "./style.css";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { FiBell, FiSearch } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";

const SIZE = 23;
const INACTIVE_COLOR = "#d9d9db";
const ACTIVE_COLOR = "#f54748";

const BottomTabs = () => {
  return (
    <div className="flex row bottomTabs">
      <div className="flex column justify__center align__center">
        <AiFillHome className="color__primary" size={SIZE} />{" "}
        <div className="color__primary bottomTab__dot"> •</div>
      </div>
      <div className="flex column justify__center align__center ">
        <AiFillHeart color={INACTIVE_COLOR} size={SIZE} />
        <div className="color__transparent bottomTab__dot"> •</div>
      </div>
      <div className="bg__primary bottomTab__search">
        <FiSearch size={SIZE} color={"#fff"} />
      </div>
      <div className="flex column justify__center align__center ">
        <FiBell size={SIZE} color={INACTIVE_COLOR} />
        <div className="color__transparent bottomTab__dot"> •</div>
      </div>
      <div className="flex column justify__center align__center ">
        <BiCartAlt size={SIZE} color={INACTIVE_COLOR} />
        <div className="color__transparent bottomTab__dot"> •</div>
      </div>
    </div>
  );
};
export default BottomTabs;
