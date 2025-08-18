export default function ProjectItem(props) {

    function checkColor(status) {
        if (status === "Complete") {
            return "#08d813ff"
        } else if (status === "Back-burner") {
            return "#a00101ff"
        } else {
            return "#979797"
        }
    }

    return (
        <div className="project-item">
            <div className="project-item-content">
                <h1 style={{
                    fontSize: "45px"
                }}>{props.title}</h1>
                <h2>
                    Current Status: <span style={{color: checkColor(props.status)}}>{props.status}</span>
                </h2>
                {props.img ? <img src={`../../assets/images/project_imgs/${props.img}`}/> : null}
                <p style={{fontSize: "20px", margin: "1.5rem 0rem"}}>
                    {props.description}
                </p>
                {props.link ? 
                <a href={props.link} target="_blank">
                    Check it out here!
                </a> : null}
            </div>
        </div>
    )
}