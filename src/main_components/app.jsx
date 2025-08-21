import { useState } from "react"
import Head from "./components/header.jsx"
import Navbar from "./components/navbar.jsx"
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"
import Footer from "./components/footer.jsx"

export default function App() {
    const [tabState, setTabState] = useState("home")
    const [newTabState, setNewTabState] = useState("")

    function handleHome() {
        setTabState("home")
    }

    function handleBlog() {
        setTabState("blog")
    }

    function handleMusic() {
        setTabState("music")
    }

    function handleGallery() {
        setTabState("gallery")
    }

    function handleNewTab() {
        switch(tabState) {
            case "blog": setNewTabState("blog") 
                break;
            case "music": setNewTabState("music") 
                break;
            case "gallery": setNewTabState("gallery")
                break;
        }
    }

    function handleNewTab() {
        switch(tabState) {
            case "blog": setNewTabState("blog") 
                break;
            case "music": setNewTabState("music") 
                break;
            case "gallery": setNewTabState("gallery")
                break;
        }
    }

    function move() {
        switch(tabState) {
            case "blog": window.location.href = "/blog.html"
                break;
            case "music": window.location.href = "/music.html"
                break;
            case "gallery": window.location.href = "/gallery.html"
                break;
        }
    }

    return (
        <div className="main">
            {newTabState === "" ? <div className={tabState != "home" ? 'fade-out' : ''} onAnimationEnd={handleNewTab}>
                <Head/>
                <div style={{
                    height: "85vh",
                    width: "100%",
                }}/>
                <Navbar home={handleHome} blog={handleBlog} music={handleMusic} gallery={handleGallery}/>
                <About/>
                <Projects/>
                <Footer/>
            </div> : null}
            {newTabState === "blog" ? <div className="transition-container">
                <div className="blog-grow" onAnimationEnd={move}/>
            </div>: null}
            {newTabState === "music" ? <div className="transition-container">
                <div className="music-grow" onAnimationEnd={move}/>
            </div>: null}
            {newTabState === "gallery" ? <div className="transition-container">
                <div className="gallery-grow" onAnimationEnd={move}/>
            </div>: null}
        </div>

    )
}