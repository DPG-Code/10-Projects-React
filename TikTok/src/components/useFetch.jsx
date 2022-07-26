import { useState, useEffect } from "react";

export default function useFetch(url, type) {
    const [data, setData] = useState(null)
    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!! url) { //Si no existe nada en la url
            fetchData()
        }

        async function fetchData() {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                setResponse(response)

                switch (type) {
                    case 'text':
                        const text = await response.text()
                        setData(text)
                        setIsLoading(false)
                        break
                    case 'json':
                        const json = await response.json()
                        setData(json)
                        setIsLoading(false)
                        break
                    default:
                }
            } catch (error) {
                console.error(error)
                setIsLoading(false)
            }
        }
    }, [url])

    return [response, data, isLoading]
}