import { useState, useRef, useEffect } from "react"

export default function MusicItem(props) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [displayDescription, setDisplayDescription] = useState(false)

    const audioRef = useRef(null)

    function showDescription() {
        setDisplayDescription(true)
    }

    function hideDescription() {
        setDisplayDescription(false)
    }

    function handleSeek(e) {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value)
    }

    function handleTimeUpdate() {
        setCurrentTime(audioRef.current.currentTime)
        setDuration(audioRef.current.duration)
    }

    function handlePause() {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    function handlePlay() {
        audioRef.current.play();
        setIsPlaying(true)
    }

    function handlePausePlay() {
        if (isPlaying) {
            handlePause()
        } else {
            handlePlay()
        }
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        const formattedseconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedseconds}`
    }

    useEffect(() => {
        const currentVal = audioRef.current
        currentVal.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            currentVal.removeEventListener("timeupdate", handleTimeUpdate)
        }
    }, [])

    return (
        <div className="music-content" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
            <div className="main-content">
                <div className="info-container">
                    <img className="music-cover" src={`/assets/images/music_imgs/${props.imgDir}`}/>
                    <div className="music-text">
                        <span>Title: {props.title}</span>
                        <span>Song-Type: {props.type}</span>
                        <span>Genre: {props.genre}</span>
                    </div>
                </div>
                <div className="audio-control">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                    />
                    <audio ref={audioRef} src={`/assets/audio/music/${props.musicDir}`}/>
                    <div className="duration-tracker">
                        <p>{formatTime(currentTime)}</p>
                        <p>{formatTime(duration)}</p>
                    </div>
                    <button onClick={handlePausePlay}>
                        <img src={`/assets/images/${isPlaying ? "pause" : "play"}.png`}/>
                    </button>
                </div>
            </div>
            {displayDescription && <p className="description">
                {props.description}
            </p>}
        </div>
    )
}