import { useState } from "react"
import Navbar from "../main_components/components/navbar.jsx"

export default function App() {
    const [tabState, setTabState] = useState("blog")
    const [showBlog, setShowBlog] = useState(false)

    return (
        <body onAnimationEnd={() => setShowBlog(true)}>     
            <Navbar/>  
            {showBlog && <div className="fade">
                <div className="header">
                    <h1>Cris's Blog Space</h1>
                    <p>
                        Hi! This is where I post all of my blogs. I'm planning on posting different types of blogs for how I currently feel. Blogs could maybe range from me talking about
                        music or some spot I like or just about anything, so click on something below and start reading!
                    </p>
                </div>
            </div>}     
        </body>
    )
}