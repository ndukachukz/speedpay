import "./style.css";
import Pizza from "../../assets/images/pizza.png";
import Burger from "../../assets/images/burger.png";

interface Category {
  category: string;
  img: string;
  selected: boolean;
}

const categories: Category[] = [
  {
    category: "Pizza",
    img: Pizza,
    selected: true,
  },
  {
    category: "Burger",
    img: Burger,
    selected: false,
  },
];
const Categories = () => {
  return (
    <div className="categories">
      <h3 className="categories__title">Categories</h3>
      <div className="flex row categories__list">
        {categories.map(({ category, img, selected }, i) => (
          <button
            key={i}
            className={`flex categories__category ${
              selected ? "bg__primary  color__white " : "color__black"
            }`}
          >
            <img
              src={img}
              alt=""
              srcSet=""
              className=" categories__category__img "
              style={
                selected
                  ? { borderRadius: 50, padding: 5, backgroundColor: "#fff" }
                  : undefined
              }
            />
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
