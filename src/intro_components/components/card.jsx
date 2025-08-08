import React from "react"

export default function Card() {
    const [showCard, setShowCard] = React.useState(false)
    const [fadeOut, setFadeOut] = React.useState(false)
    const [rerotate, setRerotate] = React.useState(false)
    const [disappearCard, setDisappearCard] = React.useState(false)
    const [transition, setTransition] = React.useState(false)

    function renderCard() {
        setShowCard(true)
    }

    function fade() {
        setFadeOut(true)
    }

    function hoverHandle() {
        setRerotate(true)
    }
    
    function disappear() {
        setDisappearCard(true)
    }

    function moveToMain() {
        window.location.href = "/main.html"
    }

    return (
        <body style={transition === true ? {backgroundColor: "#424242"} : {}}
        >
            {!transition && <div className="container">
                {!showCard && <div className={`${fadeOut ? 'fade-out' : ''}`} onAnimationEnd={renderCard}>
                    <div className="intro-button-container">
                        <span className="intro-header">Hello</span> 
                        <p>Click on the button below to get my personal card!</p>
                        <button onClick={fade}>Click here</button>
                    </div>
                </div>}
                {showCard && <div className={`card-animate ${rerotate ? 'rerotated' : ''}`} 
                        onMouseEnter={hoverHandle} 
                        onClick={disappear}>
                    <div className={`card ${disappearCard ? 'animate-disappear' : ''}`}
                        onAnimationEnd={() => setTransition(true)}>
                        <img 
                            src="/assets/images/card-profile.jpg"
                            style={{
                                width: "30vw",
                                maxWidth: "12rem",
                                borderRadius: "50%",
                                borderColor: "#474747",
                                borderWidth: ".5rem",
                                borderStyle: "solid",
                                margin: ".5rem"
                            }}
                        />
                        <div className='text-container'>
                            <h1>Cris Santiago</h1>
                            <span>Computer Science Student at UIC</span>
                            <span>Chicago, Illinois</span>
                        </div>
                    </div>
                </div>}
            </div>}
            {transition && <div className="transition-container">
                <div className="circle-shrink" onAnimationEnd={moveToMain}/>
            </div>}
        </body>
    )
}