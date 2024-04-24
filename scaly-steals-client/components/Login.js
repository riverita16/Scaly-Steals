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

  async function handleSignUp(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const userName = formData.get('name').toString();
    const userEmail = formData.get('email');
    const password = formData.get('password');

    if (!userEmail.endsWith("@ufl.edu")) {
      console.log("Email must end with '@ufl.edu'");
      return; // Exit the function if the email format is incorrect
  }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    axios.post("/api/login", { name: userName, email: userEmail, password: hashedPassword }).then(res => {
      console.log(res);
    });
  }

  return (
    <Page>
      <form onSubmit={handleLogIn}>
        <input type="email" name="email" placeholder="UFL Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <form onSubmit={handleSignUp}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="UFL Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      {/* <p>{message}</p> */}
    </Page>
  );
}