import { useState } from "react"
import { useAppContext } from "../store/Store"
import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"

export default function Create() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [intro, setIntro] = useState('')
    const [completed, setCompleted] = useState(false)
    const [review, setReview] = useState('')

    const store = useAppContext()
    const navigate = useNavigate()

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        switch (name) {
            case "title":
                setTitle(value)
                break;
            case "author":
                setAuthor(value)
                break;
            case "intro":
                setIntro(value)
                break;
            case "completed":
                setCompleted(e.target.checked)
                break;
            case "review":
                setReview(value)
                break;
            default:
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newBook = {
            id : crypto.randomUUID(),
            title, //se pone asi porque al ser title : title se sabe que son key y value iguales
            author,
            cover,
            intro,
            completed,
            review
        }

        store.createItem(newBook)
        navigate('/')
    }

    function handleChangeFile(e){
        const element = e.target
        var file = element.files[0]
        var reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onloadend = function() {
            setCover(reader.result.toString())
        }
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <p className="Title">Title</p>
                <input className="Title-input" onChange={handleChange} name="title" value={title} type="text"/>
                <p className="Author">Author</p>
                <input className="Author-input" onChange={handleChange} name="author" value={author} type="text"/>
                <p className="Cover">Cover</p>
                <input className="Cover-input" onChange={handleChangeFile} name="cover" type="file"/>
                {!!cover ? <img className="cover" src={cover} alt="Cover"/> : ''}
                <p className="Intro">Intro</p>
                <input className="Intro-input" onChange={handleChange} name="intro" value={intro} type="text"/>
                <p className="Completed">Completed</p>
                <input className="Completed-input" onChange={handleChange} name="completed" value={completed} type="checkbox"/>
                <p className="Review">Review</p>
                <input className="Review-input" onChange={handleChange} name="review" value={review} type="text"/>
                <input className="create-button" type="submit" value="Register Book"/>
            </form>
        </Layout>
    )
}