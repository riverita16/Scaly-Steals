import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./Nav";

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session) {
    return (
      <div className={'bg-green-700 w-screen h-screen flex items-center'}>
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Log in with Google</button>
        </div>
      </div>
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
