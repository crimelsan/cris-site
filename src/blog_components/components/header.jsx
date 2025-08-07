export default function Header(props) {
    const types = []
    props.data.forEach(d => {
        if (!types.includes(d.type)) {
            types.push(d.type)
        }
    })

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
                    {types.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                    ))}      
                </select> 
            </div>
        </div>
    )
}
