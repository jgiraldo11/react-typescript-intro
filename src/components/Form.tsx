import React from "react"
import { Tform, defaultForm } from "../interfaces"

const Form = () => {
  const [form, setForm] = React.useState<Tform>(defaultForm)
  const[counter, setCounter] = React.useState<number>(0)
  const[multiply, setMultiply] = React.useState<number>(1)

  const handleFormInput = (e: React.FormEvent) => {
    const target = e.target as HTMLFormElement
    setForm({...form, [target.name]: target.value})
  }

const handleButton = () => {
  // setCounter(previous => (previous = previous +1))
  setCounter(previous => previous++)
}

const handleMultiButton = () => {
  setMultiply(previous => (previous = previous *15))
}

const handleFormSubmit = () => {
  fetch(`http://localhost:3001`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(form)
  })
}

  console.log("here is form ->", form)

  return (
    <>
    <form action="submit">
      <label htmlFor="">First Name</label>
      <input type="text" name="firstName" id="" onChange={e => handleFormInput(e)} />
      <br />

      <label htmlFor="">Last Name</label>
      <input type="text" name="lastName" id="" onChange={e => handleFormInput(e)} />   
      <br />  

      <label htmlFor="">Email</label>
      <input type="email" name="email" id="" onChange={e => handleFormInput(e)} />  
      <br />

      <label htmlFor="">Password</label>
      <input type="password" name="password" id="" onChange={e => handleFormInput(e)} />   
    </form>

    <button onClick={handleButton}>{counter}</button>
    <br />

    <button onClick={handleMultiButton}>{multiply}</button>
    <br />

    <button onClick={handleFormSubmit}>Submit</button>
    </>
  ) 
}

export default Form