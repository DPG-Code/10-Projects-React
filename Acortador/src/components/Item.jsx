export default function Item({ item }) {
    return (
        <div id='url'>
            <p className='url-original'>URL: {item.url}</p>
            <a className='url-short' href={`http://127.0.0.1:5173/u/${item.shortUrl}`} target="_blank">
                http://127.0.0.1:5173/u/{item.shortUrl}
            </a>
            <p className='views'>Views: {item.views.toString()}</p>
        </div>
    )
}