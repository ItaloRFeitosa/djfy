import { signOut, useSession } from "next-auth/react"
import Image from "next/image"

export const Layout: React.FC<any> = ({ children }) => {
    return <div className="bg-background-base w-screen h-screen p-4 flex flex-col items-center">
        <Header />
        <div className="flex flex-col items-center w-full max-w-7xl">
            {children}
        </div>
    </div>
}

const Header = () => {
    const {data, status} = useSession()

    if (status == "unauthenticated") {
        return null
    }

    const isLoading = status === "loading"

    const user = isLoading ? { name: "Loading...", image: "" } : data.user

    return <header className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center">
            <Image alt="profile-pic" width={48} height={48} src={user.image} className="mr-2 rounded-full"/>
             <h2 className="font-bold text-2xl text-white">{user.name}</h2>
        </div>
        <button
            className="md:text-base text-sm font-medium cursor-pointer py-3 px-7 rounded-full text-center bg-background-elevated-base hover:bg-background-elevated-highlight text-white"
            onClick={() => signOut()}
        >
            LOG OUT
        </button>
    </header>
}