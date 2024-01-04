import Header from "../Header/header";
import "./banner.css";




const Banner = () => {
    return (
        <section className="Banner">
            <Header  />
            <div className="banner_content">
        <h1 className="banner_heading">
          Unlimited movies, TV shows and more
        </h1>
        <h4 className="banner_subheading">
          Starts at ₹149. Cancel anytime.
        </h4>
        <h5 className="banner_subheading-1">
        Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <div className="Address">
        <input autocomplete="email"  type="email"  name="email" placeholder="Email Address"></input>
        </div>
        
      
      </div>
         </section>   
            
        
    );
};

export default Banner;
