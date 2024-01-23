import { useState } from "react"
import axios from "axios"
import Container from "react-bootstrap/Container"
import Title from "../Components/Shared/Title"
import { Form } from "react-router-dom"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post("/api/v1/users/signin",{email: email, password: password});
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
    
  }
  return (
    <Container className="small-container">
      <Title title="SignIn Page"/>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control required onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com"></Form.Control>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default SignIn