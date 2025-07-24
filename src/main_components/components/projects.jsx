import { useRef } from "react"

export default function Projects() {

    return (
        <>
            <div className="project-container">
                <div className="project-head">
                    <img src="/assets/images/construction-cone.png"/>
                    <img src="/assets/images/construction-cone.png"/>
                    <h1 style={{
                        fontSize: "60px"
                    }}>PROJECTS</h1>
                    <img src="/assets/images/construction-cone.png"/>
                    <img src="/assets/images/construction-cone.png"/>
                </div>
                <hr style={{width: "250px", border: "2px solid #fff"}}></hr>
                <div className="project-body">
                    <span className="project-sub">
                        Here's a showcase of all the projects I am currently working on, as well as projects I have finished.
                    </span>
                    <div className="project-item">
                        <div id="website"/>
                        <div className="project-item-content">
                            <h1 style={{
                                fontSize: "45px"
                            }}>This Website</h1>
                            <h2>
                                Current Status: <span style={{color: "#979797"}}>In-progress</span>
                            </h2>
                            <p style={{fontSize: "20px", margin: "1.5rem 0"}}>
                                This is just supposed to be my personal website to display the stuff I like doing. It showcases the current projects I'm working on and a little
                                about section to just describe me, as well as links to places you can find me on. It also contains the music I make, photos I take, and the blogs
                                I write on seperate pages. I also like the little intro sequence I made, as well as the transitions. I think it turned out pretty decent :)
                            </p>
                        </div>
                    </div>
                    <div className="project-item">
                        <div id="ufo-50"/>
                        <div className="project-item-content">
                            <h1 style={{
                                fontSize: "45px"
                            }}>UFO 50 Guide Site</h1>
                            <h2>
                                Current Status: <span style={{color: "#979797"}}>In-progress</span>
                            </h2>
                            <p style={{fontSize: "20px", margin: "1.5rem 0"}}>
                                This is supposed to be a sort of guide/fan website based on the game UFO 50 developed by Mossmouth. I'm planning on making a guide for each game
                                in a sort of game magazine-esque style. It will also contain music, secrets, and the history behind each game, allowing for an easy viewing experience,
                                as well as just a cool place to browse interesting content.
                            </p>
                        </div>
                    </div>
                   <div className="project-item">
                        <div id="campus"/>
                        <div className="project-item-content">
                            <h1 style={{
                                fontSize: "45px"
                            }}>UIC Campus App</h1>
                            <h2>
                                Current Status: <span style={{color: "#979797"}}>In-progress</span>
                            </h2>
                            <p style={{fontSize: "20px", margin: "1.5rem 0"}}>
                                This is a little safety/social media app that I'm working on with a team of people. It's supposed to alert
                                the user of any events around or things to watch out, mainly just for colleges. I'm excited to see what we end up making
                                out of this!
                            </p>
                        </div>
                    </div>
                   <div className="project-item">
                        <div id="blob"/>
                        <div className="project-item-content">
                            <h1 style={{
                                fontSize: "45px"
                            }}>Blob Game</h1>
                            <h2>
                                Current Status: <span style={{color: "#979797"}}>In-progress</span>
                            </h2>
                            <p style={{fontSize: "20px", margin: "1.5rem 0"}}>
                                I started work on this game over the summer of 2025. It's supposed to be a platformer about a little blob and pair of legs. 
                                I want to frame the game around having to navigate the level switching between a being only a blob, and a blob with legs. This will
                                take a large amount of time for me to complete, but I'm excited to see what I turn out!
                            </p>
                        </div>
                    </div>
                   <div className="project-item">
                        <div id="ufo"/>
                        <div className="project-item-content">
                            <h1 style={{
                                fontSize: "45px"
                            }}>UFO Game</h1>
                            <h2>
                                Current Status: <span style={{color: "#a10000ff"}}>Back-burner</span>
                            </h2>
                            <p style={{fontSize: "20px", margin: "1.5rem 0"}}>
                                This was a little game I started to design towards the end of my 2025 school year based on the game "Campanella" from UFO 50. 
                                I wanted to make it control akin to the UFO from that game (sort of a floaty vehicle you have to move around), but with different level design closer to something you'd see from a regular
                                platformer. I finished the movement system for the character but stopped working on it for some reason. I make come back to this after
                                I make decent work on my other projects.
                            </p>
                        </div>
                    </div>
                    <span className="project-sub">
                        Some of my projects can be tracked on my github page, which is linked above in the ABOUT section if you want to check my stuff out!
                    </span>
                </div>
                <div>
                    <img src="/assets/gifs/construction2.gif"/>
                    <img src="/assets/gifs/construction2.gif"/>
                    <img src="/assets/gifs/construction2.gif"/>
                </div>
            </div>
        </>
    )
}