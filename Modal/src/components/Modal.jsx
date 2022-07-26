import {useRef} from 'react'
import './Modal.css'

export default function Modal ({children, title, root}) {
    const ref = useRef(null)

    function handleClick() {
        root.unmount()
        document.querySelector('#modal').remove()
        document.querySelector('#modalAccount').remove()
    }

    return (
        <div className='modal-container' ref={ref}>
                <div className='top'>
                    <p>{title}</p>
                    <button onClick={handleClick}>X</button>
                </div>
                <section>
                    {children}
                </section>
        </div>
    )
}