import { useState, useEffect } from "react"
import Navbar from "../main_components/components/navbar.jsx"
import Header from "./components/header.jsx"
import BlogStart from "./components/blog_start.jsx"
import BlogArticle from "./components/blog_article.jsx"

export default function App() {
    const [tabState, setTabState] = useState("blog")
    const [newTabState, setNewTabState] = useState("")
    const [showBlog, setShowBlog] = useState(false)
    const [filter, setFilter ] = useState("all")
    const [currArticle, setCurrArticle] = useState(0)

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8008/blogdata')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))   
    }, [])

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

    function handleToggle(dataChild) {
        setCurrArticle(dataChild); 
    };

    return (
        <div onAnimationEnd={() => setShowBlog(true)}>     
            {newTabState === "" ? <div className={tabState != "blog" ? 'fade-out' : ''} onAnimationEnd={handleNewTab}>
                <Navbar home={handleHome} blog={handleBlog} music={handleMusic} gallery={handleGallery}/> 
                {showBlog && !currArticle && <div>
                    <Header/>
                    <div className="blog-body">    
                        {data.map((d, i) => (
                            <BlogStart toggle={handleToggle} article={currArticle} key={i} ID={d.id} imgDir={d.img_dir} title={d.title} type={d.type} createdAt={d.createdAt}/>
                        ))}
                        {data.map((d, i) => (
                            <BlogArticle key={i} ID={d.id} content={d.content} imgDir={d.img_dir} title={d.title} type={d.type} createdAt={d.createdAt}/>
                        )).filter(d => d.id === currArticle)}
                    </div>
                </div>}
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