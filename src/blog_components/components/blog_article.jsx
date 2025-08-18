import { useState } from "react"
import parse from "html-react-parser"

export default function BlogArticle(props) {
    const [hideArticle, setHideArticle] = useState(false)

    function convertDate(date) {
        const monthList = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']

        const month = monthList[parseInt(date.slice(5,7)) - 1]

        const day = parseInt(date.slice(8,10))
        const year = date.split('-',1)
        
        const newDate = `${month} ${day}, ${year}`
        return newDate;
    }

    return(
        <div className="fade">
            <div className={`${hideArticle ? "fade-out" : ""}`} onAnimationEnd={() => props.changeArticle(0)}>
                <button onClick={() => setHideArticle(true)} className="back-button">
                    <img src="/src/assets/images/back-arrow.png"/>
                </button>
                <div className="blog-article">
                    <div className="article-header">
                        <h1>{props.title}</h1>
                        <p className="article-type">{props.type}</p>
                        <p className="article-timestamp">Made on: {convertDate(props.createdAt)}</p>
                    </div>
                    <img src={`/src/assets/images/blog_imgs/${props.imgDir1}`}/>
                    <div className="article-content">
                        {parse(props.content)}
                    </div>
                </div>
            </div>
        </div>
    )
}