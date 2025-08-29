import { useState } from "react"
import { InputTemplate } from "./edit-mode"

export default function Education() {
  const [educationList, setEducationList] = useState([
    { id: crypto.randomUUID() },
  ])

  const addEducation = () => {
    setEducationList([...educationList, { id: crypto.randomUUID() }])
  }

  const deleteEducation = (id) => {
    setEducationList(educationList.filter((edu) => edu.id !== id))
  }

  return (
    <section className="education">
      <h2>Education</h2>

      {educationList.map((edu, index) => (
        <div className="section-grid education-grid" key={edu.id}>
          <InputTemplate
            id={`school-${index}`}
            labelName={"School"}
            inputType={"text"}
          ></InputTemplate>
          <Dropdown index={index}></Dropdown>
          <div className="date-box">
            <InputTemplate
              id={`education-from-${index}`}
              labelName={"From"}
              inputType={"date"}
            ></InputTemplate>
            <InputTemplate
              id={`education-to-${index}`}
              labelName={"To"}
              inputType={"date"}
            ></InputTemplate>
          </div>
          {index < educationList.length - 1 && (
            <div className="edu-separator"></div>
          )}
          {index > 0 && (
            <button
              className="delete-btn"
              onClick={() => deleteEducation(edu.id)}
            >
              ×
            </button>
          )}
        </div>
      ))}
      {educationList.length < 3 ? (
        <button className="add-btn" onClick={addEducation}>
          + ADD ANOTHER ONE
        </button>
      ) : (
        ""
      )}
    </section>
  )
}

function Dropdown({ index }) {
  const [title, setTitle] = useState("high-school")

  return (
    <>
      <div className="dropdown">
        <label htmlFor={`title-${index}`}>Title of Study</label>
        <select
          className="title-dropdown"
          name="title"
          id={`title-${index}`}
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
      {title === "other" ? (
        <InputTemplate
          className="other"
          id={`please-elaborate-${index}`}
          labelName="Please elaborate"
          inputType="text"
        ></InputTemplate>
      ) : (
        ""
      )}
    </>
  )
}
