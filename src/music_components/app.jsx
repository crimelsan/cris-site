import {useState } from "react"
import Navbar from "../main_components/components/navbar.jsx"

export default function App() {
    const [tabState, setTabState] = useState("music")
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
            case "home": setNewTabState("home") 
                break;
            case "gallery": setNewTabState("gallery")
                break;
        }
    }

    function move() {
        switch(tabState) {
            case "blog": window.location.href = "/blog.html"
                break;
            case "home": window.location.href = "/main.html"
                break;
            case "gallery": window.location.href = "/gallery.html"
                break;
        }
    }
    return (
        <>
            {newTabState === "" ? <div className={tabState != "music" ? 'fade-out' : ''} onAnimationEnd={handleNewTab}>
                <Navbar home={handleHome} blog={handleBlog} music={handleMusic} gallery={handleGallery}/> 
            </div> : null}
            {newTabState === "blog" ? <div className="transition-container">
                <div className="blog-grow" onAnimationEnd={move}/>
            </div>: null}
            {newTabState === "home" ? <div className="transition-container">
                <div className="home-grow" onAnimationEnd={move}/>
            </div>: null}
            {newTabState === "gallery" ? <div className="transition-container">
                <div className="gallery-grow" onAnimationEnd={move}/>
            </div>: null}
        </>
    )
}