import { useState, useEffect } from "react"
import MusicItem from "./music_item.jsx"

export default function Body() {
    const [data, setData] = useState([])
    const [genreFilter, setGenreFilter] = useState("All")
    const [typeFilter, setTypeFilter] = useState("All")
    useEffect(() => {
        fetch('https://cris-site-bafbc409d299.herokuapp.com/musicdata')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))   
    }, [])

    const genres = []
    const types = []

    data.forEach(d => {
        if (!genres.includes(d.genre)) {
            genres.push(d.genre)
        }

        if (!types.includes(d.type)) {
            types.push(d.type)
        }
    })

    const filteredData = data.filter(d => ((typeFilter === "All" || d.type === typeFilter) && (genreFilter === "All" || d.genre === genreFilter))).reverse()

    function handleGenreFilter(genre) {
        setGenreFilter(genre)
    }

    function handleTypeFilter(type) {
        setTypeFilter(type)
    }

    return(
        <div className="body-container">
            <div className="filter-container">
                <div>
                    <label htmlFor="type">Type: </label>
                    <select id="type" onChange={(e) => handleTypeFilter(e.target.value)}>
                        <option value="All">All</option>
                        {types.map((type, i) => (
                            <option key={i} value={type}>{type}</option>
                        ))}           
                    </select>                    
                </div>
                <div>
                    <label htmlFor="genre">Genre: </label>
                    <select id="genre" onChange={(e) => handleGenreFilter(e.target.value)}>
                        <option value="All">All</option>
                        {genres.map((genre, i) => (
                            <option key={i} value={genre}>{genre}</option>
                        ))}      
                    </select>   
                </div>
            </div>
            <div className="body-content">
                {filteredData.map((d, i) => (
                    <MusicItem 
                        key={i} 
                        ID={d.id} 
                        title={d.title} 
                        genre={d.genre} 
                        musicDir={d.music_dir} 
                        imgDir={d.img_dir} 
                        description={d.description} 
                        type={d.type} 
                    />
                ))}
            </div>
        </div>
    )
}