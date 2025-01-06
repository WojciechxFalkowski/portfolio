export interface EmailFields {
    email: string;
    phone: string;
    message: string
}
export const useEmailConfiguration = () => {
    const runtimeConfig = useRuntimeConfig()

    const sendEmail = async ({ email, phone, message }: EmailFields) => {
console.log('runtimeConfig.public.BACKEND_BASE_URL');
console.log(runtimeConfig.public.BACKEND_BASE_URL);

        try {
            const response = await $fetch<void>(`${runtimeConfig.public.BACKEND_BASE_URL}/email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        email,
                        phone,
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