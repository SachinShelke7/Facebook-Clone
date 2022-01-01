import { getSession } from "next-auth/react";
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) return <Login />
  return (
      <div>
        <Head>
          <title>
            Facebook
          </title>
        </Head>

        <Header />
        <main>
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          {/* Widgets */}
        </main>
      </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {     props: {
      session,
    }
  }
}