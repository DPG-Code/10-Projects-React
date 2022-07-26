import Navbar from './Navbar'

export default function Layout({children}) {
    return (
        <div id='container'>
            <Navbar />
            <div className='create'>{children}</div>
        </div>
    )
}