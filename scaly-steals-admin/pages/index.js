import Layout from "@/components/Layout";
import { signOut, useSession } from "next-auth/react";
import styled from "styled-components";

const ProfileDiv = styled.div`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: default;
  display: inline-flex;
  align-items: center;
`;

const SignOut = styled.button`
  display: flex;
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: red;
  align-items: center;
`;

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-white flex justify-between">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="fixed right-7 bg-white gap-1 text-black rounded-lg overflow-hidden">
        <ProfileDiv>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span className="px-2">
            {session?.user?.name}
          </span>
        </ProfileDiv>
        <SignOut onClick={() => signOut({redirect: false, callbackUrl: "/"})}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
          </svg>
          <span className="px-2">
            Sign Out
          </span>
        </SignOut>
      </div>
    </div>
  </Layout>
}
