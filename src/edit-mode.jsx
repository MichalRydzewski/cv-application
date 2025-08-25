import Contact from "./contact"
import Education from "./education"
import Experience from "./experience"
import './edit-mode.css'

export default function EditMode() {
  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <Contact></Contact>
        <Education></Education>
        <Experience></Experience>
      </main>
    </>
  )
}
