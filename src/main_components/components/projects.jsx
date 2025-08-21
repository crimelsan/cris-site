import ProjectItem from "./project_item.jsx"
import Cone from "../../assets/images/construction-cone.png"
import Engineer from "../../assets/gifs/construction2.gif"

export default function Projects() {

    return (
        <div className="center">
            <div className="project-container">
                <div className="project-head">
                    <img src={Cone}/>
                    <img src={Cone}/>
                    <h1 style={{
                        fontSize: "60px"
                    }}>PROJECTS</h1>
                    <img src={Cone}/>
                    <img src={Cone}/>
                </div>
                <hr style={{width: "250px", border: "2px solid #fff"}}></hr>
                <div className="project-body">
                    <p className="project-sub">
                        Here's a showcase of all the projects I am currently working on, as well as projects I have finished.
                    </p>
                    <ProjectItem 
                        title="This Website" 
                        status="Complete" 
                        description="This is just supposed to be my personal website to display the stuff I like doing. It showcases the current projects I'm working on and a little
                                    about section to just describe me, as well as links to places you can find me on. It also contains the music I make, photos I take, and the blogs
                                    I write on seperate pages. I also like the little intro sequence I made, as well as the transitions. I think it turned out pretty decent :)"
                        img="cris-site.png"
                    />
                    <ProjectItem
                        title="UFO 50 Guide Site"
                        status="In-progress"
                        description="This is supposed to be a sort of guide/fan website based on the game UFO 50 developed by Mossmouth. I'm planning on making a guide for each game
                                    in a sort of game magazine-esque style. It will also contain music, secrets, and the history behind each game, allowing for an easy viewing experience,
                                    as well as just a cool place to browse interesting content."
                    />
                    <ProjectItem
                        title="Safety Campus App"
                        status="In-progress"
                        description="This is a little safety/social media app that I'm working on with a team of people. It's supposed to alert
                                    the user of any events around or things to watch out, mainly just for college stuff. I'm excited to see what we end up making
                                    out of this!"
                    />
                    <ProjectItem
                        title="Blob Game"
                        status="In-progress"
                        description="I started work on this game over the summer of 2025. It's supposed to be a platformer about a little blob and pair of legs. 
                                    I want to frame the game around having to navigate the level switching between a being only a blob, and a blob with legs. This will
                                    take a large amount of time for me to complete, but I'm excited to see what I turn out!"
                    />
                    <ProjectItem
                        title="UFO Game"
                        status="Back-burner"
                        description={`This was a little game I started to design towards the end of my 2025 school year based on the game "Campanella" from UFO 50. 
                                    I wanted to make it control akin to the UFO from that game (sort of a floaty vehicle you have to move around), but with different level design closer to something you'd see from a regular
                                    platformer. I finished the movement system for the character but stopped working on it for some reason. I make come back to this after
                                    I make decent work on my other projects.`}
                    />
                    <span className="project-sub">
                        Some of my projects can be tracked on my github page, which is linked above in the ABOUT section if you want to check my stuff out!
                    </span>
                </div>
                <div>
                    <img src={Engineer}/>
                    <img src={Engineer}/>
                    <img src={Engineer}/>
                </div>
            </div>
        </div>
    )
}