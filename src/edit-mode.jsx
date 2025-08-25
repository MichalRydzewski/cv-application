import Contact from "./contact"
import Education from "./education"
import Experience from "./experience"
import "./edit-mode.css"

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

export function InputTemplate({ labelName, inputType }) {
  const id = labelName
    .split(" ")
    .map((word) => word[0].toLowerCase() + word.slice(1))
    .join("-")
  return (
    <div className="input-flex">
      <label htmlFor={id}>{labelName}</label>
      <input type={inputType} id={id} />
    </div>
  )
}
