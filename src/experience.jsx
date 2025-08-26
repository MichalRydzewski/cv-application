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
        <InputTemplate
          labelName={"Position title"}
          inputType={"text"}
        ></InputTemplate>
        <InputTemplate
          labelName={"Main responsibilities of your jobs"}
          inputType={"text"}
        ></InputTemplate>
        <div>
          <InputTemplate id="experience-from" labelName={"From"} inputType={"date"}></InputTemplate>
          <InputTemplate id="experience-to" labelName={"To"} inputType={"date"}></InputTemplate>
        </div>
      </div>
    </section>
  )
}
