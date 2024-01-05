import "./enjoyCard.css";
import enjoy from "../../assets/images/enjoy.png";
import watch from "../../assets/images/watch.png";





const enjoyCard = () => {
    const cards = [{
        title :"Enjoy on your TV",
        content:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        img : enjoy
    }
    {
        title: "Anytime, Anywhere",
        content: "Enjoy on your TV, computer, tablet, or phone. Cancel anytime.",
        img: watch
    }
    {
        title: "Download and Watch Offline",
        content: "Save your favorites easily and always have something to watch.",
        img: enjoy 
    }

];
    return (
        <>
            <div className="left-item">
                <h1>Enjoy on your TV</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="right-item">
                <img src={enjoy}></img>
            </div>
        </>
    )

}


export default enjoy; 