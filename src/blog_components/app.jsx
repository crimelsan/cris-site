import { useState } from "react"
import Navbar from "../main_components/components/navbar.jsx"
import Header from "./components/header.jsx"

export default function App() {
    const [tabState, setTabState] = useState("blog")
    const [newTabState, setNewTabState] = useState("")
    const [showBlog, setShowBlog] = useState(false)
    const [filter, setFilter ] = useState("all")

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
            case "home": setNewTabState("home") 
                break;
            case "music": setNewTabState("music") 
                break;
            case "gallery": setNewTabState("gallery")
                break;
        }
    }

    function handleNewTab() {
        switch(tabState) {
            case "home": setNewTabState("home") 
                break;
            case "music": setNewTabState("music") 
                break;
            case "gallery": setNewTabState("gallery")
                break;
        }
    }

    function move() {
        switch(tabState) {
            case "home": window.location.href = "/main.html"
                break;
            case "music": window.location.href = "/music.html"
                break;
            case "gallery": window.location.href = "/gallery.html"
                break;
        }
    }    


    return (
        <div onAnimationEnd={() => setShowBlog(true)}>     
            {newTabState === "" ? <div className={tabState != "blog" ? 'fade-out' : ''} onAnimationEnd={handleNewTab}>
                <Navbar home={handleHome} blog={handleBlog} music={handleMusic} gallery={handleGallery}/> 
                {showBlog && <Header/>}
            </div> : null}
            {newTabState === "home" ? <div className="transition-container">
                <div className="home-grow" onAnimationEnd={move}/>
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