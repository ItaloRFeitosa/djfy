import { FC } from "react"

export const Container: FC<any> = ({ children }) => {
    return <div className="bg-background-base w-screen h-screen flex justify-center items-center p-4">
        <div className="flex flex-col items-center w-full max-w-md">
            {children}
        </div>
    </div>
}