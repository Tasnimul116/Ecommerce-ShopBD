import React,{useState} from 'react'
import Helmet from "../components/Helmet/Helmet"
import {Container, Row, Col,Form, FormGroup} from 'reactstrap'
import { Link } from 'react-router-dom'
import "../styles/Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn= async(e)=>{
    e.preventDefault();
    setLoading(true)

    try{
      const userCredential= await signInWithEmailAndPassword(auth,email,password)

      const user =userCredential.user
      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/home')
    }catch(error){
      setLoading(false)
      toast.error("Invalid Email or Password")
    }
  }
  return (
    <Helmet title="Login">
      <section>
        <Container >
        <Row><div className='d-flex justify-content-center mb-2'><h3 className="fw-bold fs-4">Login</h3></div></Row>
        <Row>
            {
              loading? (<Col lg='12'>loading...</Col>):(     <Col lg='6' className='m-auto text-center justify-content-center d-flex'>
          

              <Form className='auth_form' onSubmit={signIn}>
              <FormGroup className='form_group'>
              <input type="email" placeholder='Enter your Email' value={email} onChange={e=> setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form_group'>
              <input type="password" placeholder='Enter your Password'  value={password} onChange={e=> setPassword(e.target.value)}/>
              </FormGroup>
    
              <button type='submit' className="buy_btn auth_btn">Login</button>
              <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
              </Form>
            
            </Col>)
            }
        </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
