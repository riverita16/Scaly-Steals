import { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'pz5KtSbxXoHcmvF992DHJoqEu'; 

const Page = styled.div`
  background-color: rgb(250, 222, 168);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  overflow: scroll;
  padding-bottom: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    padding: 8px 16px;
    margin: 0 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: #2980b9;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const SuccessMessage = styled.p`
  color: black;
  font-size: 14px;
`;

// async function handleSubmit(e) {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const email = formData.get('email');
//   const password = formData.get('password'); 

//   console.log(email, password);  

//   useEffect(() => {
//     axios.get('/api/users').then(response => {
//       if (response) {
//         console.log("Successful");
//       }
//       else {
//         console.log("Unsuccessful")
//       }
//     })
//   }, []);

// }

export default function Login() {

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  // useEffect(() => {
  //   axios.get('api/login').then(res => {
  //     console.log(res.data);
  //   })
  // }, []);

  // const [message, setMessage] = useState('');

  async function handleLogIn(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("hi");

    const formData = new FormData(event.target); // Get the form data
    const userEmail = formData.get('email');
    const password = formData.get('password'); // Get the password from the form data
    console.log(userEmail);

    // const isPasswordMatch = await bcrypt.compare(password, user.password);

    axios.get(`/api/login?email=${userEmail}`).then(async res => {
      console.log(res.data);

      let loggedIn = false;

      if (await bcrypt.compare(password, res.data.password)) {
        console.log("Successful");
        loggedIn = true;
        setSuccessMessage("Logged in successfully!");
      } else {
        console.log("Not Successful");
      }

      if (loggedIn) {
        // var jwt = require('jsonwebtoken');
        const accessToken = jwt.sign(res.data, secretKey);
        console.log(accessToken);
        localStorage.setItem('accessToken', accessToken);
      }
      else {
        console.log("error");
        return;
      }
    })
  }

  // async function handleSignUp(event) {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const userName = formData.get('name');
  //   const userEmail = formData.get('email');
  //   const password = formData.get('password');
  //   axios.post("/api/login", { name: userName, email: userEmail, password: password }).then(res => {
  //     console.log(res);
  //   })
  // }

  const [formType, setFormType] = useState('');

  const handleFormChange = (type) => {
    setFormType(type);
  };

  async function handleSignUp(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const userName = formData.get('name').toString();
    const userEmail = formData.get('email');
    const password = formData.get('password');

    if (!userEmail.endsWith("@ufl.edu")) {
      setErrorMessage("Email must end with '@ufl.edu'");
      return; // Exit the function if the email format is incorrect
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    axios.post("/api/login", { name: userName, email: userEmail, password: hashedPassword, phone: "", image: "", products: [], liked: [], cart: [] }).then(res => {
      console.log(res);
      setErrorMessage("");
      setSuccessMessage("Signed up successfully!");
    });
  }

  return (
    <Page>
      <ButtonGroup>
        <button onClick={() => handleFormChange('login')}>Log In</button>
        <button onClick={() => handleFormChange('signup')}>Sign Up</button>
      </ButtonGroup>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}


      {formType === 'login' && (
        <Form onSubmit={handleLogIn}>
          <input type="email" name="email" placeholder="UFL Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <Button type="submit">Log In</Button>
        </Form>
      )}

      {formType === 'signup' && (
        <Form onSubmit={handleSignUp}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="UFL Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Page>
  );
}
