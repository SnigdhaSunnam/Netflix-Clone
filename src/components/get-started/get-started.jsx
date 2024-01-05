import "./get-started.css"
import Button from "../Button/button";
const GetStarted = () => {
    return (
        <>
            <h5 className="banner_subheading-1">
                Ready to watch? Enter your email to create or restart your membership.
            </h5>
            <div className="address">
                <input autocomplete="email" className="email" type="email" name="email" placeholder="Email Address"></input>
                <Button label={"Get Started"} />
            </div>
        </>
    )
}

export default GetStarted;