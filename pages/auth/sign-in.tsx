import { GetServerSidePropsContext } from "next"
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react"
import { Container, SignInButton } from "@frontend/features/auth/sign-in/components"
import { useSignIn } from "@frontend/features/auth/sign-in/useSignIn"
import { authOptions } from "../api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth"

export default function SignIn({ provider }: { provider: ClientSafeProvider }) {
  const { loading, signIn, response } = useSignIn()

  return (
      <Container>
        <SignInButton provider={provider} onClick={() => signIn(provider.id)} />
      </Container>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders()

  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  if (!!session) {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      },
    }
  }

  return {
    props: { provider: providers["spotify"] },
  }
}