import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/page1">Argentina</Link>
            <Link to="/page2">Nigeria</Link>
        </div>
    )
}
