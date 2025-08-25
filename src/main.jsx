import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import './main.css'

const root = createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
