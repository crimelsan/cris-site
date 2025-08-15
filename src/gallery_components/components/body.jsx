import { useState, useEffect } from "react"
import PhotoItem from "./photo_item.jsx"

export default function Body() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8008/photodata')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))   
    }, [])

    return (
        <div className="body-container">
        {data.reverse().map((d,i) => (
            <PhotoItem
                key={i}
                ID={d.id}
                title={d.title}
                description={d.description}
                imgDir={d.img_dir}
                takenOn={d.takenOn}
                takenAt={d.takenAt}
            />
        ))}            
            
        </div>
    )    
}