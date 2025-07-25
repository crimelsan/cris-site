export default function Navbar({home, blog, music, gallery}) {
    return (
        <div className="navbar">
            <button onClick={home}>
                Home
            </button>
            <button onClick={blog}>
                Blogs
            </button>
            <button onClick={music}>
                Music
            </button>
            <button onClick={gallery}>
                Gallery
            </button>
        </div>
    )
}