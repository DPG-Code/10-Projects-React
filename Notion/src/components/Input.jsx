import { forwardRef } from 'react'

function Input({value, onChange, onKeyDown}, ref) {
    return (
        <input ref={focus ? ref : null} type="text" value={value} onKeyDown={onKeyDown} onChange={onChange}/>
    )
}


export default forwardRef(Input)