import React from "react"
import Head from "./components/header.jsx"

export default function App() {
    const [hideElement, setHideElement] = React.useState(true)


    function disableHide() {
        setHideElement(false)
    }

    return (
        <>
            {hideElement && <div className="transition-container" >
                    <div className="circle-shrink" onAnimationEnd={disableHide}/>
                </div>}
            {!hideElement && <div>
                <Head/>
            </div>}
        </>

    )
}