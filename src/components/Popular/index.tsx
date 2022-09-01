import { AiFillFire } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaPizzaSlice } from "react-icons/fa";
import "./style.css";
import Pizza from "../../assets/images/pizza.png";
import Burger from "../../assets/images/burger.png";

interface Category {
  item: string;
  img: string;
  desc: string;
  itemPrice: number;
}

const popular: Category[] = [
  {
    item: "Pizza",
    img: Pizza,
    desc: "Cheesy Mozerrella",
    itemPrice: 90.19,
  },
  {
    item: "Beef Burger",
    img: Burger,
    desc: "Cheesy Mozerrella",
    itemPrice: 80.19,
  },
];

const Popular = () => {
  return (
    <div className="popular">
      <div className="flex row align__center justify__between">
        <h3 className="title popular__title">Popular Now</h3>

        <p className="secondary flex align__center popular__title__viewAll">
          View All
          <RiArrowDropRightLine
            color="#fbeaad"
            size={15}
            className={"popular__title__caret__left"}
          />
        </p>
      </div>
      <div className="flex row popular__list">
        {popular.map(({ item, img, desc, itemPrice }, i) => (
          <button key={i} className={` popular__item bg__white`}>
            <AiFillFire
              size={15}
              className="color__primary popular__item__badge"
            />
            <img src={img} alt="" srcSet="" className="popular__item__img " />
            <p className="popular__item__name">{item}</p>
            <p className="popular__item__desc">
              {desc} <img src={Pizza} alt="" srcSet="" className="descImg" />
            </p>
            <p className="popular__item__price">
              <span className="color__primary popular__item__currency ">$</span>
              {itemPrice.toFixed(2)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Popular;
