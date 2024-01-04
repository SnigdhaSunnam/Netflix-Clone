import Dropdown from "../dropdown/dropdown"
import Button from "../Button/button"
import NetflixIcon from "../../assets/images/netflixicon.png"
import "./header.css"


const Header = () => {
    const onClickSignIn = () => {
        alert("signIn");
    };
    const langOption = [{
        label: "English",
        value: "eng"
    }, {
        label: "Hindi",
        value: "hindi"
    }];

    return (

        <div className="header">

            <div className="header-logo"><img src={NetflixIcon}></img></div>

            <div className="header-actions">
            <Dropdown options={langOption} />


                <Button label={"Sign In"} />
                



            </div>
        </div>


    )
}

export default Header;