import Head from "./components/header.jsx"
import Navbar from "./components/navbar.jsx"
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"


export default function App() {
    return (
        <>
            <Head/>
            <div style={{
                height: "85vh",
                width: "100%",
            }}/>
            <Navbar/>
            <About/>
            <Projects/>
        </>

    )
}