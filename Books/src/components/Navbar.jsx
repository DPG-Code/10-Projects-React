import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
        </header>
    )
}