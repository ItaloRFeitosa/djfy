import { Layout } from "@frontend/ui";
import { GetServerSideProps, NextPageContext } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]"

export default function App(){
    return <Layout></Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth/sign-in',
          permanent: false,
        },
      }
    }
  
    return {
      props: { session }
    }
  }