export default function Head() {    
    return (
        <div style={{position: 'relative'}}>
            <div className="gallery-container">
                <div className="overlay"/> 
                    <img id="one" src="/src/assets/images/img1.png"/>
                    <img id="two"src="/src/assets/images/img2.png"/>
                    <img id="three"src="/src/assets/images/img3.png"/>
                    <img id="four"src="/src/assets/images/img4.png"/>
                    <img id="five"src="/src/assets/images/img5.png"/>
                    <img id="six"src="/src/assets/images/img6.png"/>
                    <img id="seven"src="/src/assets/images/img7.png"/>
                    <img id="eight"src="/src/assets/images/img8.png"/>
                    <img id="nine"src="/src/assets/images/img9.png"/>
                    <img id="ten"src="/src/assets/images/img10.png"/>
                <div className="head-text">
                    <h1>{"Welcome to Cris's personal website >:D"}</h1>
                    <span>he does things apparently</span>
                </div>
            </div>
        </div>
    )
}