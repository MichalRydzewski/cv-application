import { InputTemplate } from "./edit-mode"
import { useState } from "react"

export default function Experience() {
  const [experienceList, setExperienceList] = useState([
    { id: crypto.randomUUID() },
  ])

  const addExperience = () => {
    setExperienceList([...experienceList, { id: crypto.randomUUID() }])
  }

  const deleteExperience = (id) => {
    setExperienceList(experienceList.filter((exp) => exp.id !== id))
  }

  return (
    <section className="experience">
      <h2>Practical Experience</h2>

      {experienceList.map((exp, index) => (
        <div className="section-grid experience-grid" key={exp.id}>
          <InputTemplate
            id={`company-name-${index}`}
            labelName={"Company name"}
            inputType={"text"}
          ></InputTemplate>
          <div className="input-flex" id={`input-flex-${index}`}>
            <label htmlFor={`main-responsibilities-${index}`}>
              Main responsibilities
            </label>
            <textarea
              id={`main-responsibilities-${index}`}
              placeholder="Please enter each one in a new line like so:

doing some computer stuff
assembling lego
eating pizza 
fishing in troubled waters"
            />
          </div>
          <InputTemplate
            id={`position-title-${index}`}
            labelName={"Position title"}
            inputType={"text"}
          ></InputTemplate>
          <div className="date-box">
            <InputTemplate
              id={`experience-from-${index}`}
              labelName={"From"}
              inputType={"date"}
            ></InputTemplate>
            <InputTemplate
              id={`experience-to-${index}`}
              labelName={"To"}
              inputType={"date"}
            ></InputTemplate>
          </div>
          {index < experienceList.length - 1 && (
            <div className="edu-separator"></div>
          )}
          {index > 0 && (
            <button
              className="delete-btn"
              onClick={() => deleteExperience(exp.id)}
            >
              ×
            </button>
          )}
        </div>
      ))}
      {experienceList.length < 3 ? (
        <button className="add-btn" onClick={addExperience}>
          + ADD ANOTHER ONE
        </button>
      ) : (
        ""
      )}
    </section>
  )
}
