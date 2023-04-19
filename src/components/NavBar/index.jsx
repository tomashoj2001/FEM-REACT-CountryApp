import DarkButton from "../DarkButton";
import "./index.css"

export default function NavBar({ setShowDetail }) {
  const handleClick = () => setShowDetail([false, ""])

  return (
    <nav className="navbar">
      <div className="container">
        <button className="navbar__title" onClick={handleClick}>Where in the world?</button>
        <DarkButton />
      </div>
    </nav>
  )
}