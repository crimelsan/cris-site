export default function About() {
    return(
        <div className="about-container">
            <h1 style={{
                fontSize: "60px"
            }}>ABOUT</h1>
            <hr style={{width: "200px", border: "2px solid #fff"}}></hr>
            <div className="about-body">
                <img src="../../assets/images/about-profile.png"/>
                <span>
                    Hi, I'm Cris Santiago, and I would like to say, thank you for visiting my site! I am a Computer Science major with a concentration 
                    in Software Engineering who is currently attending UIC on his sophomore year. <br/><br/>
                    I mainly enjoy making things, that be it making music, taking photos, or 
                    working on some coding projects. I also like playing video games, watching movies, and reading. <br/><br/>
                    If you want to check out what I'm doing, look to the icons below to find me on other platforms.
                </span>
            </div>
            <div className="link-container">
                <a href="https://www.youtube.com/@randomdude2295" target="_blank"><img src="/assets/images/youtube.png"/></a>
                <a href="https://bsky.app/profile/randomdude242.bsky.social" target="_blank"><img src="/assets/images/bluesky.png"/></a>
                <a href="https://www.instagram.com/cris_santiago_5/" target="_blank"><img src="/assets/images/instagram.png"/></a>
                <a href="https://www.linkedin.com/in/cris-santiago-7082a2330/" target="_blank"><img src="/assets/images/linkedin.svg"/></a>
                <a href="https://github.com/crimelsan" target="_blank"><img src="/assets/images/githubsvg.svg"/></a>
            </div>
        </div>
    )
}