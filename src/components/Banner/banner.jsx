import Header from "../Header/header";
import GetStarted from "../get-started/get-started";
import "./banner.css";




const Banner = () => {
  return (

    <section className="Banner">
      <Header />
      <div className="banner_content">
        <h1 className="banner_heading">
          Unlimited movies, TV shows and more
        </h1>
        <h4 className="banner_subheading">
          Starts at ₹149. Cancel anytime.
        </h4>
        <GetStarted></GetStarted>
      </div>
    </section>


  );
};

export default Banner;
