import EditMode from "./edit-mode"
import ViewMode from "./view-mode"
import { useState } from "react"

export default function App() {
  const [mode, setMode] = useState("edit")

  function handleMode(e) {
    e.preventDefault()
    setMode(e.target.value)
  }

  return mode === "edit" ? (
    <>
      <EditMode></EditMode>
      <button value="view" onClick={handleMode}>Enter View Mode</button>
    </>
  ) : (
    <>
      <ViewMode></ViewMode>
      <button value="edit" onClick={handleMode}>Enter Edit Mode</button>
    </>
  )
}
