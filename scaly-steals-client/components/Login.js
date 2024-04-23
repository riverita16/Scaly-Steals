import { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";


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
    axios.get(`/api/login?email=${userEmail}&password=${password}`).then(res => {
      console.log(res.data);
      if (res.data.password == password) {
        console.log("Successful");
      } else {
        console.log("Not Successful");
      }
    })
  }

  async function handleSignUp(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("hi");

    const formData = new FormData(event.target); // Get the form data
    const userName = formData.get('name');
    const userEmail = formData.get('email');
    const password = formData.get('password'); // Get the password from the form data
    axios.post("/api/login", { name: userName, email: userEmail, password: password }).then(res => {
      console.log(res);
    })
  }

  return (
    <Page>
      <form onSubmit={handleLogIn}>
        <input type="email" name="email" placeholder="UFL Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <form onSubmit={handleSignUp}>
        <input type="string" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="UFL Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      {/* <p>{message}</p> */}
    </Page>
  );
}