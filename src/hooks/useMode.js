import { useEffect } from "react";

export default function useMode(mode, setMode) {
  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])

  const root = document.querySelector(':root')
  if (mode === 'light') {
    root.style.setProperty("--background-color", "hsl(0, 0%, 98%)")
    root.style.setProperty("--element-color", "hsl(0, 0%, 100%)")
    root.style.setProperty("--input-color", "hsl(0, 0%, 52%)")
    root.style.setProperty("--text-color", "hsl(200, 15%, 8%)")
  } else {
    root.style.setProperty("--background-color", "hsl(207, 26%, 17%)")
    root.style.setProperty("--element-color", "hsl(209, 23%, 22%)")
    root.style.setProperty("--input-color", "hsl(0, 0%, 52%)")
    root.style.setProperty("--text-color", "hsl(0, 0%, 100%)")
  }

  const handleClick = () => setMode(mode === 'light' ? 'dark' : 'light')
  console.log('useMode')
  return {handleClick}
}