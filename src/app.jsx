import EditMode from "./edit-mode"
import ViewMode from "./view-mode"
import { useState } from "react"

export default function App() {
  const [mode, setMode] = useState("edit")

  function handleMode(e) {
    e.preventDefault()
    setMode(e.target.value)
  }

  const viewBtn = (
    <button className="view-btn" value="view" onClick={handleMode}>
      Enter View Mode
    </button>
  )
  const editBtn = (
    <button className="edit-btn" value="edit" onClick={handleMode}>
      Enter Edit Mode
    </button>
  )

  return mode === "edit" ? (
    <>
      <EditMode children={viewBtn}></EditMode>
    </>
  ) : (
    <>
      <ViewMode children={editBtn}></ViewMode>
    </>
  )
}
