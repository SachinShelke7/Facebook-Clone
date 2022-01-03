import { getSession } from "next-auth/react";
import Head from 'next/head'
import Feed from "../components/Feed";
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";


export default function Home({ session }) {
  if (!session) return <Login />

  return (
      <div className="bg-gray-100">
        <Head>
          <title>
            Facebook
          </title>
        </Head>

        <Header />
        <main className="flex">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
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