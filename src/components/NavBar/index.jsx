import DarkButton from "../DarkButton";
import "./index.css"

export default function NavBar({ setShowDetail }) {
  const handleClick = () => setShowDetail([false, ""])

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar__title" onClick={handleClick}>Where in the world?</h1>
        <DarkButton />
      </div>
    </nav>
  )
}