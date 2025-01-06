export interface EmailFields {
    email: string;
    name: string;
    message: string
}
export const useEmailConfiguration = () => {
    const runtimeConfig = useRuntimeConfig()

    const sendEmail = async ({ email, name, message }: EmailFields) => {

        try {
            const response = await $fetch<void>(`${runtimeConfig.public.BACKEND_BASE_URL}/email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        email,
                        name,
                        message
                    })
            })

            return response
        }
        catch (error: any) {
            throw new Error(error)
        }
    }

    return {
        sendEmail
    }
}