import { useSession, signIn } from "next-auth/react"
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

async function signup(ev) {
    ev.preventDefault();

    // verify password is the same
    // add to db
    // log user in
}

export default function SignUp() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [verifyPass, setverifyPass] = useState('');

    return (
        <LogInContainer>
        <div className="py-1.5">
            <h3 className="text-white">Sign Up</h3>
        </div>
        <Divider />
        <LogInForm className="py-3" onSubmit={signup}>
            <label>UFL Email</label>
            <input type="text" placeholder="example@ufl.edu" value={email} onChange={ev => setEmail(ev.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}></input>
            <label>Re-type password</label>
            <input type="password" placeholder="password" value={verifyPass} onChange={ev => setverifyPass(ev.target.value)}></input>   
            <button type="submit" className="bg-white p-2 px-4 rounded-lg text-black">Sign Up</button>    
        </LogInForm>
        <Divider />
        <div className="py-1.5">
            <small className="text-white">Existing account?</small>
        </div>
        <div className="py-1.5">
            <Link href={'/'} className="bg-white p-2 px-4 rounded-lg">Log in</Link>
        </div>
        </LogInContainer>
    );
}