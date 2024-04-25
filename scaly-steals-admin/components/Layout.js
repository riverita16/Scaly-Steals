import { useSession, signIn } from "next-auth/react"
import Nav from "./Nav";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const LogInContainer = styled.div`
    background-color: rgb(21 128 61);
    width: 100vw;
    height: 100vh;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`;

const Divider = styled.hr`
    width: 25%;
    margin: 0 auto;
`;

const LogInForm = styled.form`
    color: white;

    input {
        display: flex;
        position: relative;
        left: 37.5%;
        width: 25%;
    }
`;

export default function Layout({children}) {
  const router = useRouter();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function login(values) {
    ev.preventDefault();

    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status?.error) throw Error(status?.error);
    if (status?.ok) { console.log("done"); router.push("/"); }
  }

  const { data: session } = useSession()
  if(!session) {
    return (
      <LogInContainer>
        <div className="py-1.5">
            <h3 className="text-white">User Login</h3>
        </div>
        <Divider />
        <LogInForm className="py-1.5" onSubmit={login}>
            <label>UFL Email</label>
            <input type="text" placeholder="example@ufl.edu" value={email} onChange={ev => setEmail(ev.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}></input>    
            <button type="submit" className="bg-white p-2 px-4 rounded-lg text-black">Log in</button>    
        </LogInForm>
        <div className="py-1.5">
          <small className="text-white">or</small>
        </div>
        <div className="py-3">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">
            Log in with Google
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-4 h-4 mr-3 text-gray-900 fill-current"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <Divider />
        <div className="py-1.5">
          <small className="text-white">No account?</small>
        </div>
        <div className="py-1.5">
            <Link href={'/signup'} className="bg-white p-2 px-4 rounded-lg">Sign Up</Link>
        </div>
      </LogInContainer>
    );
  }

  return(
    <div className="bg-green-700 min-h-screen flex">
      <Nav />
      <div className="bg-blue-900 text-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}
