import One from "../../assets/images/img1.png"
import Two from "../../assets/images/img2.png"
import Three from "../../assets/images/img3.png"
import Four from "../../assets/images/img4.png"
import Five from "../../assets/images/img5.png"
import Six from "../../assets/images/img6.png"
import Seven from "../../assets/images/img7.png"
import Eight from "../../assets/images/img8.png"
import Nine from "../../assets/images/img9.png"
import Ten from "../../assets/images/img10.png"

export default function Head() {
    
    return (
        <div style={{position: 'relative'}}>
            <div className="gallery-container">
                <div className="overlay"/> 
                    <img id="one" src={One}/>
                    <img id="two"src={Two}/>
                    <img id="three"src={Three}/>
                    <img id="four"src={Four}/>
                    <img id="five"src={Five}/>
                    <img id="six"src={Six}/>
                    <img id="seven"src={Seven}/>
                    <img id="eight"src={Eight}/>
                    <img id="nine"src={Nine}/>
                    <img id="ten"src={Ten}/>
                <div className="head-text">
                    <h1>{"Welcome to Cris's personal website >:D"}</h1>
                    <span>he does things apparently</span>
                </div>
            </div>
        </div>
    )
}