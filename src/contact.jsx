export default function Contact() {
  function Template({ labelName, inputType }) {
    const id = labelName.split(" ").map((word) => word[0].toLowerCase() + word.slice(1)).join("-")
    return (
      <div className="input-flex">
        <label htmlFor={id}>{labelName}</label>
        <input type={inputType} id={id} />
      </div>
    )
  }

  return (
    <div className="general">
      <h2>General information</h2>
      <div className="general-grid">
        <Template labelName={"First Name"} inputType={"text"}></Template>
        <Template labelName={"Last Name"} inputType={"text"}></Template>
        <Template labelName={"Email"} inputType={"email"}></Template>
        <Template labelName={"Number"} inputType={"tel"}></Template>
      </div>
      {/* <div className="contact-grid">
        <Template labelName={"Your school"} inputType={"text"}></Template>
        <Template labelName={"Title of study"} inputType={"text"}></Template>
        <Template labelName={"Your school"} inputType={"text"}></Template>
      </div> */}
    </div>
  )
}
