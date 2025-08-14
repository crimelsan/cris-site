import { useState, useEffect } from "react"
import Navbar from "../main_components/components/navbar.jsx"
import Header from "./components/header.jsx"
import BlogStart from "./components/blog_start.jsx"
import BlogArticle from "./components/blog_article.jsx"

export default function App() {
    const [tabState, setTabState] = useState("blog")
    const [newTabState, setNewTabState] = useState("")
    const [showBlog, setShowBlog] = useState(false)
    const [filter, setFilter ] = useState("All")
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
        setCurrArticle(0)
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

    function handleChange(data) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setCurrArticle(data)
    }

    function handleFilter(data) {
        setFilter(data)
    }

    const filteredData = data.filter(d => (filter === "All" || d.type === filter))

    return (
        <div onAnimationEnd={() => setShowBlog(true)}>     
            {newTabState === "" ? <div className={tabState != "blog" ? 'fade-out' : ''} onAnimationEnd={handleNewTab}>
                <Navbar home={handleHome} blog={handleBlog} music={handleMusic} gallery={handleGallery}/> 
                {showBlog && !currArticle && <div>
                    <Header handleFilter={handleFilter} data={data}/>
                    <div className="blog-body">   
                        {filteredData.map((d, i) => (
                            <BlogStart 
                                changeArticle={handleChange} 
                                key={i} 
                                ID={d.id} 
                                imgDirThumbnail={d.img_dir1} 
                                title={d.title} 
                                type={d.type} 
                                createdAt={d.createdAt}
                            />
                        ))}
                    </div>
                </div>}
                {data.filter(d => d.id === currArticle).map((d, i) => (
                    <BlogArticle 
                        changeArticle={handleChange} 
                        key={i} 
                        ID={d.id} 
                        content={d.content} 
                        imgDir1={d.img_dir1}
                        title={d.title} 
                        type={d.type} 
                        createdAt={d.createdAt}
                    />
                ))}
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