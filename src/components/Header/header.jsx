
import Button from "../Button/button"
import NetflixIcon from "../../assets/images/netflixicon.png"
import  "./header.css"






const Header = () => {
    
       
    

    return (

        <div className="header">
            
            <div className="header-logo"><img src={NetflixIcon}></img></div>

            <div className="header-actions">
                
                    <select>
                        <option value=" ">English</option>
                        <option value=" ">Hindi</option>
                    </select>
                

                <Button label={"Sign In"} />
                {/*<Dropdown options={langOption} /> */}

              
            </div>
        </div>


    )
}

export default Header;