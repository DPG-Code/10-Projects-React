export default function Loader(item, id) {
    function Container({ children }) {
        return <div>{ children }</div>
    }

    if(item === null) {
        return <Container>Loading...</Container>
    }

    if(item === undefined) {
        return <Container>Url not found {id}</Container>
    }

    return item ? <Container>Redirect {item.url}</Container> : ""
}