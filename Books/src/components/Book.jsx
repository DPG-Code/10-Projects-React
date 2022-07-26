import { Link } from "react-router-dom";

export default function Book({item}) {
    return (
        <Link to={`/view/${item.id}`}>
            <img src={item.cover} alt={item.title} />
            <p>{item.title}</p>
        </Link>
    )
}