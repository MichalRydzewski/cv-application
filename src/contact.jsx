export default function Contact() {
  function template(x) {
    return 'Enter your ' + x
  }

  return (
    <>
      <h2>Contact info</h2>
      <input type="text" placeholder={template("name")}></input>
      <input type="text" placeholder={template("surname")}></input>
      <input type="tel" placeholder={template("number")}></input>
    </>
  )
}
