import {useState } from "react"
import Navbar from "../main_components/components/navbar.jsx"
import Header from "./components/header.jsx"
import Body from "./components/body.jsx"

export default function App() {
    const [tabState, setTabState] = useState("gallery")
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
            case "music": setNewTabState("music")
                break;
        }
    }

    function move() {
        switch(tabState) {
            case "blog": window.location.href = "/blog.html"
                break;
            case "home": window.location.href = "/main.html"
                break;
            case "music": window.location.href = "/music.html"
                break;
        }
    }
    return (
        <>
            {newTabState === "" ? <div className={tabState != "gallery" ? 'fade-out' : ''} onAnimationEnd={handleNewTab}>
                <Navbar home={handleHome} blog={handleBlog} music={handleMusic} gallery={handleGallery}/> 
                <Header/>
                <Body/>
            </div> : null}
            {newTabState === "blog" ? <div className="transition-container">
                <div className="blog-grow" onAnimationEnd={move}/>
            </div>: null}
            {newTabState === "home" ? <div className="transition-container">
                <div className="home-grow" onAnimationEnd={move}/>
            </div>: null}
            {newTabState === "music" ? <div className="transition-container">
                <div className="music-grow" onAnimationEnd={move}/>
            </div>: null}
        </>
    )
}