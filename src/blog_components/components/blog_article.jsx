export default function BlogArticle(props) {
    return(
        <div className="blog-article">
            <h1>{props.title}</h1>
            <p>Made on: {props.date}</p>
            {props.content}
        </div>
    )
}