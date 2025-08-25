import { useState } from "react"
import { InputTemplate } from "./edit-mode"

export default function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="section-grid education-grid">
        <InputTemplate labelName={"School"} inputType={"text"}></InputTemplate>
        <Dropdown></Dropdown>
        <div className="date-of-study">
          <InputTemplate
            labelName={"From"}
            inputType={"date"}
          ></InputTemplate>
          <InputTemplate
            labelName={"To"}
            inputType={"date"}
          ></InputTemplate>
        </div>
      </div>
    </section>
  )
}

function Dropdown() {
  const [title, setTitle] = useState("high-school")

  return (
    <>
      <div className="dropdown">
        <label htmlFor="title">Title of Study</label>
        <select
          className="title-dropdown"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option value="high-school">High School</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">Doctorate (PhD)</option>
          <option value="other">Other</option>
        </select>
      </div>
      {title === "other" ? <InputTemplate className="other" labelName={"Please elaborate"} inputType={"text"}></InputTemplate> : ""}
    </>
  )
}
