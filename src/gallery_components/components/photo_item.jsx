export default function PhotoItem(props) {
    function getURL(image) {
        return new URL(`../../assets/images/gallery_imgs/${image}`, import.meta.url).href;
    }

    function convertDate(date) {
        const monthList = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']

        const month = monthList[parseInt(date.slice(5,7)) - 1]

        const day = parseInt(date.slice(8,10))
        const year = date.split('-',1)
        
        const newDate = `${month} ${day}, ${year}`
        return newDate;
    }

    return (
        <div className="photo-content">
            <img src={getURL(props.imgDir)}/>
            <span className="title">"{props.title}"</span>
            <div className="descriptors">
                <span>Taken On: {convertDate(props.takenOn)}</span>
                <span>Taken At: {props.takenAt}</span>
            </div>
            <p className="description">
                {props.description}
            </p>
        </div>
    )
}