import "./style.css";
import rider from "../../assets/images/rider.webp";

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
      <img src={rider} alt="" srcSet="" className={"hero__photo"} />
    </div>
  );
};

export default Hero;
