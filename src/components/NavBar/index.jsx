import DarkButton from "../DarkButton";
import "./index.css"

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar__title">Where in the world?</h1>
        <DarkButton />
      </div>
    </nav>
  )
}