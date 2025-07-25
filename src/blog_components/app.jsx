import { useState } from "react"
import Navbar from "../main_components/components/navbar.jsx"

export default function App() {
    const [tabState, setTabState] = useState("blog")

    return (
        <>     
            <Navbar/>       
        </>
    )
}