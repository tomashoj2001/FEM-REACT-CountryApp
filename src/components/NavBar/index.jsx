import { Link } from "wouter";
import DarkButton from "../DarkButton";
import "./index.css"

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar__title">Where in the world?</Link>
        <DarkButton />
      </div>
    </nav>
  )
}