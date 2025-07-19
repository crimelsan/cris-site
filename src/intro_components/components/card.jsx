import React from "react"

export default function Card() {
    const [showCard, setShowCard] = React.useState(false)
    const [fadeOut, setFadeOut] = React.useState(false)
    const [rerotate, setRerotate] = React.useState(false)
    const [disappearCard, setDisappearCard] = React.useState(false)
    const [negateDiv, setNegateDiv] = React.useState(false)

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

    function doNegateDiv() {
        setNegateDiv(true)
        window.location.href = "/main.html"
    }

    return (
        <>
            <div className="container">
                {!showCard && <div className={`${fadeOut ? 'fade-out' : ''}`} onAnimationEnd={renderCard}>
                    <div className="intro-button-container">
                        <span className="intro-header">Hello</span> 
                        <p>Click on the button below to get my personal card!</p>
                        <button onClick={fade}>Click here</button>
                    </div>
                </div>}
                {!negateDiv && showCard && <div className={`card-animate ${rerotate ? 'rerotated' : ''}`} 
                        onMouseEnter={hoverHandle} 
                        onClick={disappear}>
                    <div className={`card ${disappearCard ? 'animate-disappear' : ''}`}
                        onAnimationEnd={doNegateDiv}>
                        <img 
                            src="/assets/images/card-profile.jpg"
                            style={{
                                width: "12rem",
                                borderRadius: "50%",
                                borderColor: "#474747",
                                borderWidth: 8,
                                borderStyle: "solid",
                                margin: 0
                            }}
                        />
                        <div className='text-container'>
                            <h1>Cris Santiago</h1>
                            <span>Computer Science Student at UIC</span>
                            <span>Chicago, Illinois</span>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}