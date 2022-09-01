import "./style.css";
const Hero = () => {
  return (
    <div className={"hero"}>
      <div className={"hero__content"}>
        <h3>
          The Fastest In Delivery <span className="color__primary">Food</span>
        </h3>

        <button className="hero__content__btn bg__primary color__white">
          Order Now
        </button>
      </div>
      <div className={"hero__photo"}></div>
    </div>
  );
};

export default Hero;
