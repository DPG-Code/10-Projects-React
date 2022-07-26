import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from '../store/Store'

export default function View() {
    const [item, setItem] = useState({})
    const params = useParams()
    const store = useAppContext()

    useEffect(function() {
        const book = store.getItem(params.bookId)
        setItem(book)
    }, [])

    return (
        <Layout>
            <div id="view">
                <h2 className="view-title">{item?.title}</h2>
                {item?.cover ? <img className="view-cover" src={item.cover} alt={item.title} /> : ''}
                <p className="view-author">Author: {item?.author}</p>
                <p className="view-intro">Intro: {item?.intro}</p>
                {item?.completed ? <p className="view-completed">Leido</p> : <p className="view-completed">Sin terminar</p>}
                <p className="view-review">Review: {item?.review}</p>
            </div>
        </Layout>
    )
}