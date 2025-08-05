import { useState, useEffect } from "react"
import MusicItem from "./music_item.jsx"

export default function Body() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8008/blogdata')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))   
    }, [])

    return(
        <div className="body-container">
            <div className="filter-container">
                <div>
                    <label htmlFor="type">Type: </label>
                    <select id="type">
                        <option value="All">All</option>
                        <option value="Original">Original</option>      
                        <option value="Remix">Remix</option>                
                    </select>                    
                </div>
                <div>
                    <label htmlFor="genre">Genre: </label>
                    <select id="genre">
                        <option value="All">All</option>
                        <option value="Jazz">Jazz</option>
                        <option value="8-Bit">8-Bit</option>
                        <option value="Electronic">Electronic</option>
                    </select>   
                </div>
            </div>
            <div className="body-content">
                <MusicItem/>
                <MusicItem/>
            </div>
        </div>
    )
}