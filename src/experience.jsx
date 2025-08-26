import { InputTemplate } from "./edit-mode"

export default function Experience() {
  return (
    <section className="experience">
      <h2>Practical Experience</h2>
      <div className="section-grid experience-grid">
        <InputTemplate
          labelName={"Company name"}
          inputType={"text"}
        ></InputTemplate>
        <div className="input-flex">
          <label htmlFor="main-responsibilities">Main responsibilities</label>
          <textarea
            id="main-responsibilities"
            placeholder="Please enter each one in a new line like so:

doing some computer stuff
assembling lego
eating pizza 
fishing in troubled waters"
          />
        </div>
        <InputTemplate
          labelName={"Position title"}
          inputType={"text"}
        ></InputTemplate>
        <div className="date-box">
          <InputTemplate
            id="experience-from"
            labelName={"From"}
            inputType={"date"}
          ></InputTemplate>
          <InputTemplate
            id="experience-to"
            labelName={"To"}
            inputType={"date"}
          ></InputTemplate>
        </div>
      </div>
    </section>
  )
}
