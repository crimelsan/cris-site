import React from "react"
import Head from "./components/header.jsx"
import { getItem } from "/utils/local_storage.js"
import { setItem } from "/utils/local_storage.js"

export default function App() {
    const [hideElement, setHideElement] = React.useState(() => {
        const item = getItem("hideElement");
        return item || 'true';
    })

    React.useEffect(() => {setItem("hideElement", hideElement)}, [hideElement])

    function disableHide() {
        setHideElement('false')
    }

    return (
        <>
            {hideElement === 'true' ? <div className="transition-container" >
                    <div className="circle-shrink" onAnimationEnd={disableHide}/>
                </div> : null}
            {hideElement === 'false' ? <Head/> : null}
        </>

    )
}