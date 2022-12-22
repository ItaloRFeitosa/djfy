import { signIn, SignInResponse } from "next-auth/react"
import { useState } from "react"

type SignInInput = Parameters<typeof signIn>

export const useSignIn = () => {
    const [response, setResponse] = useState<SignInResponse>(null)
    const [loading, setLoading] = useState(false)
    
    return {
        signIn: async (id: SignInInput[0]) => {
            setLoading(true)
            signIn(id)
            .then(setResponse)
            .catch(error => setResponse(prev => ({...prev, error: String(error)})))
            .finally(() => setLoading(false))
        },
        response,
        loading
    }
}