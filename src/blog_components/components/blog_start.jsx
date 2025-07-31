import { useState } from "react"

export default function BlogStart(props) {
    const [article, setArticle] = useState(props.ID)

    function determineBackground(type) {
        switch(type) {
            case "General": return "general";
                break;
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
        <button onClick className={`blog-item ${determineBackground(props.type)}`}>
            <img src={props.imgDir}/>
            <div className="blog-content">
                <h1>{props.title}</h1>
                <div>
                    <p className="type">{props.type}</p>
                    <p className="timestamp">{convertDate(props.createdAt)}</p>
                </div>
            </div>
        </button>
    )
}