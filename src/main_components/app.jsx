import React from "react"
import Head from "./components/header.jsx"
import Navbar from "./components/navbar.jsx"

export default function App() {
    return (
        <>
            <Head/>
            <div style={{
                height: "85vh",
                width: "100%",
            }}/>
            <Navbar/>
        </>

    )
}