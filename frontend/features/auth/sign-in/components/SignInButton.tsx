import { ClientSafeProvider } from "next-auth/react"

type SignInButtonProps = {
    provider: ClientSafeProvider
    onClick: () => void
}

export const SignInButton = ({ provider, onClick }: SignInButtonProps) => {
    return <button
        className="md:text-lg text-base font-medium w-full cursor-pointer py-4 px-8 rounded-full text-center bg-green-base hover:bg-green-highlight text-white"
        onClick={onClick}
    >
        {`Log in with ${provider.name}`.toUpperCase()}
    </button>
}

// h 48 w 450 py13 px31 br 500px