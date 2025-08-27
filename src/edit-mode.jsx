import Contact from "./contact"
import Education from "./education"
import Experience from "./experience"
import "./edit-mode.css"

export default function EditMode({children}) {
  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <Contact></Contact>
        <Education></Education>
        <Experience></Experience>
        {children}
      </main>
    </>
  )
}

export function InputTemplate({ labelName, inputType, id }) {
  let returnId

  if (id === undefined) {
    returnId = labelName
      .split(" ")
      .map((word) => word[0].toLowerCase() + word.slice(1))
      .join("-")
  } else {
    returnId = id
  }

  return (
    <div className="input-flex">
      <label htmlFor={returnId}>{labelName}</label>
      <input type={inputType} id={returnId} />
    </div>
  )
}
