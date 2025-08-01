export default function Header(props) {
    return (
        <div className="fade">
            <div className="header">
                <h1>Cris's Blog Space</h1>
                <p>
                    Hi! This is where I post all of my blogs. I'm planning on posting different types of blogs for how I currently feel. Blogs could maybe range from me talking about
                    music or some spot I like or just about anything, so click on something below and start reading!
                </p>
                <select onChange={(e) => props.handleFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="General">General</option>           
                </select> 
            </div>
        </div>
    )
}

//<option value="Music">Music</option>   
//<option value="Spots">Spots</option>     