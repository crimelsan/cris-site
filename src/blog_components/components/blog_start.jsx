export default function BlogStart({changeArticle, type, imgDirThumbnail, title, createdAt, ID}) {

    function determineBackground(type) {
        switch(type) {
            case "General": return "general";
                break;
            case "Music": return "music";
                break;
            case "Spots": return "spots";
                break;
            case "Cooking": return "cooking";
                break;
            case "Video Games": return "video-games";
                break;
            case "Screen Media": return "screen-media";
            default: return ""
        }
    }

    function convertDate(date) {
        const monthList = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']

        const month = monthList[parseInt(date.slice(5,7)) - 1]

        const day = parseInt(date.slice(8,10))
        const year = date.split('-',1)
        
        const newDate = `${month} ${day}, ${year}`
        return newDate;
    }


    return(
        <button onClick={() => changeArticle(ID)} className={`blog-item ${determineBackground(type)}`}>
            <img src={`/src/assets/images/blog_imgs/${imgDirThumbnail}`}/>
            <div className="blog-content">
                <h1>{title}</h1>
                <div>
                    <p className="type">{type}</p>
                    <p className="timestamp">{convertDate(createdAt)}</p>
                </div>
            </div>
        </button>
    )
}