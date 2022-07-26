import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Loader from "../components/Loader"
import useReducerApp from "../store/store"

export default function Redirect() {
    const [state, dispatch] = useReducerApp()
    const [item, setItem] = useState(null)
    const params = useParams() //path

    useEffect(function() {
        const data = localStorage.getItem('urls') ?? []
        const items = JSON.parse(data)
        const id = params.id
        const itemUrl = items.find((item) => item.shortUrl === id)

        if(itemUrl) {
            dispatch({ type: "LOAD" })
            dispatch({ type : 'ADD_VIEW', data : id })
            setItem(itemUrl)
            setTimeout(() => {
                window.location.href = itemUrl.url
            }, 3000)
        }
        else {
            setItem(undefined)
        }
    }, [])

    useEffect(() => {}, [state])

    return <Loader item={item} id={params.id}/>
}