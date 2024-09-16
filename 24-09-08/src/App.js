import React, { useState } from "react"
import "./App.css"
import Counter from "./components/Counter"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"
import User from "./components/Me"
import "./App.css";

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)
  const hobbies =["Jalgpall", "Arvutimägud", "Söömine"];
  return (
    <>
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter /> 
      <User name="Eerik" hobbies= {hobbies} />
    </>
  )
}

export default App